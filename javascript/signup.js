window.addEventListener("load", () => {
    if (localStorage.getItem("user")) {
        window.location.replace("../index.html");
    }
});

import {
    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
} from "./firebase.js";

const signUp = async () => {
    try {
        const fullName = document.querySelector("#fullName");
        const password = document.querySelector("#password");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");

        // db obj
        const userObj = {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
        };
        console.log("userObj", userObj);
        // firstly user signup
        const response = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        const uid = response.user.uid;

        const userResponse = await setDoc(doc(db, "users", uid), userObj);
        alert("user successfully signup");
        window.location.href = "../pages/login.html";
        // console.log("userResponse", userResponse);
        // console.log(response, "response");
    } catch (error) {
        console.log("error", error.message);
        alert(error.message);
    }
};

window.signUp = signUp;
