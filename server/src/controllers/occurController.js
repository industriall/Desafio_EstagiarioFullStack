const moment = require('moment')
const db = require('../models')

const { body, validationResult } = require('express-validator')

const errorFormatter = ({ msg }) => msg

const testDateOrder = (value, { req }) => {
    const dateFormat = "DD/MM/YYYY"
    const startDate = moment(value, dateFormat)
    const endDate = moment(req.body.end, dateFormat)
    if (endDate.isValid() && startDate.isValid()) {
        if (endDate.isBefore(startDate)) {
            throw 'A data final é anterior à data inicial.'
        }
    }
    //Returns true if the order of dates is not wrong.
    //Invalid dates are ignored because they are checked in validate()
    return true
}

class OccurController {
    validate() {
        return [
            body('title')
                .notEmpty().withMessage('O título é obrigatório.')
                .isLength({ max: 45 }).withMessage('O título possui mais de 45 caracteres.'),

            body('occurrences').isArray({ min: 1 }).withMessage('É necessária pelo menos uma ocorrência.'),
            body('occurrences.*').isString().withMessage('As ocorrências devem ser strings.')
                .isLength({ min: 1 }).withMessage('A ocorrência não deve ser vazia.'),

            body('start')
                .notEmpty().withMessage('A data de início é necessária.')
                .isDate({ format: 'DD/MM/YYYY' }).withMessage('A data de início é inválida.')
                //Custom check to verify if start date is after end (or vice versa)
                .custom(testDateOrder),

            body('end')
                .notEmpty().withMessage('A data final é necessária.')
                .isDate({ format: 'DD/MM/YYYY' }).withMessage('A data final é inválida.')
        ]
    }

    async create(req, res) {
        const errors = validationResult(req).formatWith(errorFormatter)
        if (errors.isEmpty()) {
            const { title, start, end, occurrences } = req.body
            const occurrence = await db.Occurrence.create({
                title, start, end,
                occurrences: JSON.stringify(occurrences)
            })
            return res.send({
                //Request successful if there were no errors
                sucesso: errors.isEmpty(),
                id: occurrence.id
            })
        } else {
            return res.status(400).json({
                sucesso: errors.isEmpty(),
                errorMessages: errors.array()
            })
        }
    }
}

module.exports = OccurController