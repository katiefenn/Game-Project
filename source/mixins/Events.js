define(
	'mixins/Events',
	[],
	function () {
		var events = {
				eventHandlers: {},
				on: function(eventName, handler, context) {
		            if(!_.has(this.eventHandlers, eventName)) {
		                this.eventHandlers[eventName] = [];
		            }

		            this.eventHandlers[eventName].push(function(eventObject) {
		                handler.call(context, eventObject);
		            });
		        },
		        trigger: function(eventName, eventObject, handlers) {
		            _.each(handlers[eventName], function(handler) {
		                handler(eventObject);
		            });
		        }
			};

		return events;
	}
);