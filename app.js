const app = Vue.createApp({
  data() {
    return {
      alertMessage: "Alert is triggered...",
      userData: "",
      enteredUserData: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    userInput(event) {
      this.userData = event.target.value;
    },
    enteredUserInput(event) {
      this.enteredUserData = event.target.value;
    },
  },
});
app.mount("#assignment");
