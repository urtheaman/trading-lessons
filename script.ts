const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()


const input = document.getElementById("textarea") as HTMLInputElement;
const submit = document.getElementById("submit") as HTMLButtonElement;
const signInBtn = document.getElementById('sign-in')
const lessons = {};



input.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("lessons", JSON.stringify(lessons));
});
