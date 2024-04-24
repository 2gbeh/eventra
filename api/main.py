from apiflask import APIFlask

apiflask = APIFlask(__name__)


# CATCH WRONG URLs
@apiflask.errorhandler(404)
def route_not_found(error):
    print(error)
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


@apiflask.errorhandler(500)
def server_error(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


@apiflask.errorhandler(502)
def bad_gateway_error(error):
    return {
        "status": False,
        "message": f"{error}",
        "data": None
    }


# root api path
@apiflask.get("/")
def index():
    return {
        "status": True,
        "message": "Hello from Eventra",
        "data": None
    }


# get all event from firebase
@apiflask.get("/events")
def get_all_event_from_firebase():
    return {
        "status": True,
        "message": "Could not get all event from firebase",
        "data": None
    }


# get one event from firebase
@apiflask.get("/events/<eventId>")
def get_one_event_from_firebase():
    return {
        "status": True,
        "message": "Could not get an event from firebase",
        "data": None
    }


# add events to firebase
@apiflask.post("/events")
def add_event_to_firebase():
    return {
        "status": True,
        "message": "Could not add event in firebase",
        "data": None
    }


# update an event in firebase
@apiflask.patch("/events/<event_id>")
def update_event_in_firebase():
    return {
        "status": True,
        "message": "Could not update event in firebase",
        "data": None
    }


# update an event in firebase
@apiflask.put("/events/<event_id>")
def replace_event_in_firebase():
    return {
        "status": True,
        "message": "Could not update event in firebase",
        "data": None
    }


# delete all event from firebase
@apiflask.delete("/events")
def delete_all_event_from_firebase():
    return {
        "status": True,
        "message": "Could not delete all event from firebase",
        "data": None
    }


# delete one event from firebase
@apiflask.delete("/events/<event_id>")
def delete_one_event_from_firebase():
    return {
        "status": True,
        "message": "Could not delete an event from firebase",
        "data": None
    }


if __name__ == "__main__":
    apiflask.run(debug=False, host="0.0.0.0", port=8080)
