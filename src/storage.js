import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	collection,
	doc,
	setDoc,
	getDocs,
	writeBatch,
	serverTimestamp,
	query,
	orderBy,
	updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDjnP0mURxbRQeo7rzj3UL4To_UzkSDHdE",
	authDomain: "todo-9ffce.firebaseapp.com",
	projectId: "todo-9ffce",
	storageBucket: "todo-9ffce.appspot.com",
	messagingSenderId: "267563520710",
	appId: "1:267563520710:web:f765d69ec7bec2c0903dc7",
};

export function createStorage(key) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	return {
		key,
		db,
		pull: async function () {
			const ref = collection(this.db, this.key);
			const q = query(ref, orderBy("createdAt"));
			const querySnapshot = await getDocs(q);

			const todos = [];

			querySnapshot.forEach((doc) => {
				todos.push({
					id: doc.id,
					title: doc.data().title,
					done: doc.data().done,
				});
			});

			return todos;
		},

		push: async function (todo) {
			try {
				await setDoc(doc(this.db, this.key, todo.id), {
					title: todo.title,
					done: todo.done,
					createdAt: serverTimestamp(),
				});
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		},

		delete: async function ({ todosIds }) {
			const batch = writeBatch(this.db);

			todosIds.forEach((id) => {
				const ref = doc(this.db, this.key, id);
				batch.delete(ref);
			});

			await batch.commit();
		},

		////////////////////////////////////////////////////////////////////////////////////
		deleteOne: async function (id) {
			const batch = writeBatch(this.db);

			const ref = doc(this.db, this.key, id);
			batch.delete(ref);

			await batch.commit();
		},

		update: async function (todo) {
			const ref = doc(this.db, this.key, todo.id);

			await updateDoc(ref, {
				done: todo.done,
			});
		},
	};
}
