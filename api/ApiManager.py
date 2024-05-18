from typing import Optional

import firebase_admin
from firebase_admin import credentials, firestore
from firebase_admin.credentials import Certificate


class ApiManager:
    def __init__(self):
        self.credentialPath: str = "testproject-400a1-firebase-adminsdk-yaho7-0dff104cc6.json"
        self.cred: Certificate = credentials.Certificate(self.credentialPath)
        firebase_admin.initialize_app(self.cred)

    # create document. new user in collection
    def createDocument(self, collection: str, document_data: dict, phone_number: str):
        client = firestore.client()
        doc_ref = client.collection(collection).document(phone_number)
        doc_ref.set(document_data)
        print('Document created with ID:', doc_ref.id)

    # get all documents
    def readAllDocument(self, collection: str) -> list[dict]:
        dict_list: list[dict] = []
        db = firestore.client()
        doc_ref = db.collection(collection).stream()
        for doc in doc_ref:
            dict_list.append(doc.to_dict())
        return dict_list

    # get data from collection by document phone_number
    def readDocument(self, collection: str, phone_number: str) -> Optional[dict]:
        db = firestore.client()
        doc_ref = db.collection(collection).document(phone_number)
        document = doc_ref.get()
        if document.exists:
            print('Document data:', document.to_dict())
            return document.to_dict()
        else:
            print('No such document!')
            return None

    # Update a document in Firestore
    def updateDocument(self, collection: str, phone_number: str, update_data: dict):
        db = firestore.client()
        doc_ref = db.collection(collection).document(phone_number)
        doc_ref.update(update_data)
        print('Document updated successfully!')

    # Delete a document from Firestore
    def deleteDocument(self, collection: str, phone_number: str):
        db = firestore.client()
        doc_ref = db.collection(collection).document(phone_number)
        doc_ref.delete()
        print('Document deleted successfully!')
