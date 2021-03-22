import React, { Component } from 'react';

import Event from '../Event/Event';

class EventList extends Component {

	render() {
		return(
			<ol>
				{this.props.events.map((event, index) => (
					<ul key={index}>
						<div id="event">
							<Event
								event={event}
								editEvent={() => this.props.editEventCallback(event.id)}
								deleteEvent={() => this.props.delEventCallback(event.id)}
								/>
						</div>
					</ul>
				))}
			</ol>
		);
	}

}

export default EventList;