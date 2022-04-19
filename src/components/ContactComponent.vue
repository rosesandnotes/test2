<template>
  <div class="contact-container container-fluid">
    <div id="contact" class="container d-flex flex-column align-items-start">
          <h3 class="mb-2"> 
            Contact me
          </h3> 
          <h2 class="mb-5">
            Let's work together
          </h2>
          <div class="row d-flex justify-content-evenly">
             <div class="text-container col-md-12 col-xl-5">
                  <div class="row d-flex">
                    <div class="email col-12 d-flex flex-row align-items-center  mb-3">
                         <img src="../assets/email.svg" alt="email" width="45px" height="45px" class="me-3"> 
                        <a href="mailto:maryrose_avenido@yahoo.com">maryrose_avenido@yahoo.com</a>
                    </div>
                    <div class="phone col-12 d-flex flex-row align-items-center  mb-3">
                         <img src="../assets/phone.svg" alt="phone" width="45px" height="45px"  class="me-3"> 
                         <a href="tel:+4542508814">+45 42 50 8814</a>
                    </div>
                    <div class="address col-12 d-flex flex-row align-items-center mb-5">
                        <img src="../assets/address.svg" alt="address" width="45px" height="45px"  class="me-3"> 
                        <p> Skrænten 48, 6870 Ølgod, Denmark</p>
                    </div>
                  </div>
              </div>
              <!-- <pre>
                {{JSON.stringify(formValues, null, 2)}}
              </pre> -->
              <form @submit="submitForm" class="form-container col-md-12 col-xl-7 align-items-end" onsubmit="openModal()">
                <div class="mb-3 d-flex flex-column">
                  <label for="nameInput" class="form-label">Name</label>
                  <input type="text" class="form-control" id="nameInput" placeholder="" v-model="formValues.name" required>
                </div>
                <div class="mb-3 d-flex flex-column">
                  <label for="emailInput" class="form-label">Email</label>
                  <input type="email" class="form-control" id="emailInput" placeholder="" v-model="formValues.email" required>
                </div>

                <div class="mb-3 d-flex flex-column">
                  <label for="contactNumberInput" class="form-label">Contact Number</label>
                  <input type="text" class="form-control" id="contactNumberInput" placeholder="" v-model="formValues.contact" data-validation="number" 
    data-validation-allowing="negative,number" input name="color" 
    datavalidation-ignore="$" required="required" minlength="8" maxlength="12" pattern="\d*">
                  <span class="contact-note mt-2">Note: Contact number must only contain numbers. Remove plus (+) sign for area code.</span>
                </div>
                <div class="mb-3 d-flex flex-column">
                  <label for="messageTextarea" class="form-label">Message</label>
                  <textarea class="form-control" id="messageTextarea" rows="3" v-model="formValues.message" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary col-12 col-xl-12 btn-lg mt-5" >send message</button>

              </form>

          </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        formValues: {
          name: '',
          email: '',
          contact: '',
          message: ''
        },
        
      }
    },
    methods: {
      submitForm(event){
        event.preventDefault()
        console.log('Form Values', this.formValues)
      },
      
    }
  }
</script>

<style lang="scss" scoped>
.contact-container{
  min-height: 80vh;
  background-color: #1A2C26;
}

#contact{
  // height: 100vh;
  padding-top: 8vh;
  padding-bottom: 8vh;

  h3, h2, a, p, .form-label{
    color: #D7E0DD;
  }

  h2{
    text-align: left;
  }
}

.form-label{
  text-align: left;
}


.email,
.phone,
.address {
  height: 45px;

}

.contact-note{
  color: #8c9692;
  text-align: left;
  font-size: 12px;
}

</style>