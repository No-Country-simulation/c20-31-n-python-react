"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Doctor, Patient, Appointment, Record
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

from flask_cors import CORS

api = Blueprint("api", __name__)

# Allow CORS requests to this API
CORS(api)


# ruta de ejemplo
@api.route("/hello", methods=["POST", "GET"])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# aqui cominezas mis rutas


# get doctor by id
@api.route("/doctor/<int:id>", methods=["GET"])
def get_doctor_by_id(id):
    current_doctor = Doctor.query.get(id)
    if not current_doctor:
        return jsonify({"error": "doctor not found"}), 404
    return jsonify(current_doctor.serialize()), 200


# create a doctor
@api.route("/doctor", methods=["POST"])
def create_doctor():
    data = request.get_json()
    name = data.get("name", None)
    dni = data.get("dni", None)
    email = data.get("email", None)
    password = data.get("password", None)
    registrattiont = data.get("registrationt", None)
    specialty = data.get("specialty", None)
    number = data.get("number", None)

    # validamos que el doctor no exista
    doctor_exist = Doctor.query.filter_by(email=email).first()
    if doctor_exist:
        return jsonify({"error": "Doctor exist"}), 404

    # si no existe continuamos
    hashed_password = generate_password_hash(password)

    try:
        new_doctor = Doctor(
            name=name,
            email=email,
            password=hashed_password,
            dni=dni,
            registrationt=registrattiont,
            specialty=specialty,
            number=number,
            is_active=True,
        )
        db.session.add(new_doctor)
        db.session.commit()

        return jsonify(new_doctor.serialize()), 201

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500


# edict a doctor
@api.route("/doctor/<int:id>", methods=["PUT"])
def edit_doctor(id):
    data = request.get_json()
    name = data.get("name", None)
    dni = data.get("dni", None)
    email = data.get("email", None)
    password = data.get("password", None)
    registrattiont = data.get("registrationt", None)
    specialty = data.get("specialty", None)
    number = data.get("number", None)

    # validamos que el doctor no exista

    doctor_exist = Doctor.query.filter_by(id=id).first()
    if not doctor_exist:
        return jsonify({"error": "Doctor exist"}), 404

    # si no existe el paswword se le asigna su mismo valor
    if not password:
        password = doctor_exist.password

    # de los contrario se hashead el nuevo
    password = generate_password_hash(password)

    try:

        update_doctor = Doctor.query.get(id)

        update_doctor.password = password

        update_doctor.email = email
        update_doctor.password = (password,)
        update_doctor.dni = (dni,)
        update_doctor.registrationt = (registrattiont,)
        update_doctor.specialty = (specialty,)
        update_doctor.number = (number,)
        db.session.commit()
        return jsonify({"User": update_doctor.serialize()}), 200

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500

    # delete a doctor


# delete user
@api.route("/doctor/<int:id>", methods=["DELETE"])
def delete_doctor_by_id(id):
    doctor_to_delete = Doctor.query.get(id)

    if not doctor_to_delete:
        return jsonify({"error": "user not found"}), 404

    try:
        db.session.delete(doctor_to_delete)
        db.session.commit()
        return jsonify("doctor deleted successfully"), 200

    except Exception as error:
        db.session.rollback()
        return error, 500
