import { db, doc, getDoc } from "./firebase.js";

window.addEventListener("load", async () => {
    if (!localStorage.getItem("user")) {
        window.location.replace("../pages/login.html");
        return;
    }

    console.log(localStorage.getItem("user"));

    // get user Data on firestore
    const userID = localStorage.getItem("user");
    const response = await getDoc(doc(db, "users", userID));
    console.log("response", response.data());
    const name = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    console.log(response.data().fullName);
    
    name.innerHTML = `${response.data().fullName}`;
    email.innerHTML = `${response.data().email}`;
    phone.innerHTML = `${response.data().phone}`;
});