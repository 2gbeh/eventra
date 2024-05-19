import firebase_admin
from firebase_admin import credentials, firestore
from firebase_admin.credentials import Certificate

from api.model.db_model import DbModel


class ApiManager:
    def __init__(self):
        self.credentialPath: str = "testproject-400a1-firebase-adminsdk-yaho7-0dff104cc6.json"
        self.cred: Certificate = credentials.Certificate(self.credentialPath)
        firebase_admin.initialize_app(self.cred)
        self._db_client = firestore.client()

    # create document. new user in collection
    def createDocument(self, collection: str, document_data: dict) -> DbModel:
        if not self._checkDocumentExists(collection=collection, doc_id=document_data["documentId"]):
            try:
                doc_ref = self._db_client.collection(collection).document(document_data["documentId"])
                doc_ref.set(document_data)
                return DbModel(status=True, message=f'Document created with ID: {doc_ref.id}', )
            except Exception as e:
                return DbModel(status=False, message=f"{e}")  # Return empty list on error
        return DbModel(status=False,
                       message=f"Documents with id {document_data['documentId']} already exist")  # Return empty list on error

    # get all documents
    def readAllDocument(self, collection: str) -> DbModel:
        try:
            dict_list: list[dict] = []
            doc_ref = self._db_client.collection(collection).stream(timeout=10)
            print(doc_ref)
            for doc in doc_ref:
                dict_list.append(doc.to_dict())
            return DbModel(status=True, message="All Document gotten", data=dict_list)  # Return empty list on error
        except Exception as e:
            return DbModel(status=False, message=f"Error getting documents: {e}")  # Return empty list on error

    # get data from collection by document doc_id
    def readDocument(self, collection: str, doc_id: str) -> DbModel:
        doc_ref = self._db_client.collection(collection).document(doc_id)
        document = doc_ref.get()
        if document.exists:
            return DbModel(status=True, message='Document data: gotten', data=[document.to_dict()])
        else:
            return DbModel(status=False, message='No such document!')

    # Update a document in Firestore
    def updateDocument(self, collection: str, doc_id: str, update_data: dict) -> DbModel:
        if self._checkDocumentExists(collection, doc_id):
            try:
                doc_ref = self._db_client.collection(collection).document(doc_id)
                doc_ref.update(update_data)
                return DbModel(status=True, message='Document updated successfully!')
            except Exception as e:
                return DbModel(status=False, message=f'Document updated Error! {e}')
        return DbModel(status=False, message=f'Document with id {doc_id} in {collection} does not exist')

    # Delete a document from Firestore
    def deleteDocument(self, collection: str, doc_id: str) -> DbModel:
        if self._checkDocumentExists(collection, doc_id):
            try:
                doc_ref = self._db_client.collection(collection).document(doc_id)
                doc_ref.delete()
                return DbModel(status=True, message=f'Document {doc_id} deleted from collection {collection}.', )
            except Exception as e:
                return DbModel(status=False, message=f'Document updated Error! {e}')
        return DbModel(status=False, message=f'Document with id {doc_id} in {collection} does not exist')

    def _checkDocumentExists(self, collection: str, doc_id: str) -> bool:
        # Reference to the document
        doc_ref = self._db_client.collection(collection).document(doc_id)
        # Get the document
        doc = doc_ref.get()
        # Check if the document exists
        if doc.exists:
            return True
        else:
            return False
