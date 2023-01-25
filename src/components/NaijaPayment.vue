<template>
  <div class="body">
    <div id="app" class="container py-2">

      <div class="row">
        <div class="col-md-2">
           
        </div>

        <div class="col-md-10">

          <div class="row">
            <div class="col-md-3">
              <button
                  class="navbar-toggler bg-dark"
                  type="button"
                  @click.prevent="showOffcanvasMenu()"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              <div class="m float-start">
                <a class="navbar-brand bd">
                  Currency Swap</a
                >
              </div>
            </div>

            <div class="col-md-9">
              <div class="pt-3 float-end">
                <img src="../assets/img3.png">
                  <img src="../assets/img2.png" style="width:200px; margin-left:100px" >
              </div>
            </div>
          </div><hr>

          <div class="row">
            <div class="col-md-12">
              <div class="swap">
                <div class="currency">
                  <h4>Get Daily Access to BDC Funds available for Swap at the cheapest Parallel Rates</h4>
                  <p>We offer limited Naira & Foreign currencies on daily basis for users to swap & transfer at  cheap Parallel rates</p>
                  <p>Businesses can also access cheap foreign currencies to settle business needs abroad</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6 col-md-3">
              <div class="swa">
                <img src="../assets/naija.png" class="img-fluid mb-2" width="30" height="30">
                <h4>10,000,000 <span>NGN</span></h4>
                <div class="progress mb-2" style="height: 8px;padding: 2px;margin: 0 50px;">
                  <div class="progress-bar" role="progressbar" style="width: 90%;background-color: gold;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <router-link to="/naija-payment"><img src="../assets/Group.png"></router-link>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="swa">
                <img src="../assets/flag-Stars-and-Stripes-May-1-1795.png" class="img-fluid mb-2" width="30" height="30">
                <h4>15,000 <span>USD</span></h4>
                <div class="progress mb-2" style="height: 8px;padding: 2px;margin: 0 50px;">
                  <div class="progress-bar" role="progressbar" style="width: 90%;background-color: red;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <router-link to="/"><img src="../assets/Group.png"></router-link>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="swa">
                <img src="../assets/Flag_of_the_United_Kingdom.png" class="img-fluid mb-2" width="30" height="30">
                <h4>25,000 <span>GBP</span></h4>
                <div class="progress mb-2" style="height: 8px;padding: 2px;margin: 0 50px;">
                  <div class="progress-bar" role="progressbar" style="width: 70%;background-color: green;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <router-link to="/"><img src="../assets/Group.png"></router-link>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="swa">
                <img src="../assets/index.png" class="img-fluid mb-2" width="30" height="30">
                <h4>15,000 <span>EUR</span></h4>
                <div class="progress mb-2" style="height: 8px;padding: 2px;margin: 0 50px;">
                  <div class="progress-bar" role="progressbar" style="width: 70%;background-color: green;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <router-link to="/"><img src="../assets/Group.png"></router-link>
              </div>
            </div>

            <div class="col-6 col-md-3">
              <div class="swa">
                <h4>Business Needs?</h4>
                <button class="mb-2">Contact Us</button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="transact">
                <h5>My Recent Transactions</h5>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <span>May 19 2022, 20:20</span>
                        <h6>500 USD</h6>
                        <p>Transfer to Ben Adams (0123456789 - Wema)</p>
                      </td>
                      <td>Exchange Rate : NGN580/$1</td>
                      <td>282,500 NGN</td>
                      <td><img src="../assets/Vector.png" alt=""></td>
                    </tr>
                    <tr>
                      <td>
                        <span>May 19 2022, 20:20</span>
                        <h6>500 USD</h6>
                        <p>Transfer to Ben Adams (0123456789 - Wema)</p>
                      </td>
                      <td>Exchange Rate : NGN580/$1</td>
                      <td>918,000 NGN</td>
                      <td><img src="../assets/Vector.png" alt=""></td>
                    </tr>
                    <tr>
                      <td>
                        <span>May 19 2022, 20:20</span>
                        <h6>500 USD</h6>
                        <p>Transfer to Ben Adams (0123456789 - Wema)</p>
                      </td>
                      <td>Exchange Rate : NGN580/$1</td>
                      <td>2,222 NGN</td>
                      <td><img src="../assets/Vector.png" alt=""></td>
                    </tr>

                    
                  </tbody>
                </table>
                <span>See More</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      

      </div>
    </div>
  

</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
    };
  },
  methods: {
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
:root {
  --offcanvas-width: 200px;
}

.sidenavbar {
  margin-top: 2px !important;
  width: var(--offcanvas-width);
  height: 922px;
  background: #ffffff;
  border: 1px solid #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 25px;
}

.swap{
  background: linear-gradient(137.43deg, rgba(255, 255, 255, 0.5) 3.89%, rgba(255, 255, 255, 0.2) 100%);
  border: 0.811433px solid #FFFFFF;
  border-radius: 20.2858px;
  margin: 20px 0;
  padding: 10px 0 0 0;
}

.swap h4{
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #3B3B3B;
}
.swap p{
  font-style: normal;
  font-size: 12px;
  color: #3B3B3B;
}

.swa{
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 17.7557px;
  padding: 20px 0 8px 0;
  margin: 0 0 20px 0;
}
.swa h4{
  font-size: 14px;
}
.swa span{
  font-size: 10px;
}
.swa button{
  background: #57D60A;
  box-shadow: 0px 3.3497px 10.0491px rgba(0, 0, 0, 0.15);
  border-radius: 4.18713px;
  border: 0;
  font-size: 12px;
  padding: 5px 15px;
}

.m a{
  color: #3B3B3B;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 43px;
  text-transform: capitalize;
}

.transact{
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 26.1299px;
  padding: 15px 20px;
  margin: 30px 0 0 0;
}
.transact table{
  margin: 30px 0;
  text-align: left;
}

.transact table span{
  font-size: 12px;
}
.transact table p{
  font-size: 12px;
}

img {
  margin-top: -1px !important;
}
.m{
  padding: 20px 0 0 0;
}

.m > button {
  margin-left: 9rem;
  margin-top: 17px !important;
  color: #fff;
}
.notification > img {
  border-radius: 50px;
}
.bs>img{
  margin-left: 260px;
}
</style>
