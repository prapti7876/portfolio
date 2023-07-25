 
function myFunction() {
  document.body.classList.toggle("dark-mode");
}

// <!-- <script>
// const timeContainer = document.getElementById("time-container");
// const BIRTH_DAY = "20-01-2000";
// const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
// const intlNumberFormatter = new Intl.NumberFormat("en-US");

// setInterval(() => {
//   const now = new Date();
//   const difference = Math.floor(
//     (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
//   );

//   timeContainer.innerText = intlNumberFormatter.format(difference);
// }, 1000);
// </script>





const dayCounter = document.getElementById('time-container');
const start = '2019-07-02';
const startDate = new Date(start);
const numFormat = new Intl.NumberFormat("en-US");
const oneDay = 1000 * 60 * 60 * 24;
 
setInterval(() => {
   const currentDate = new Date();
   const difference = Math.floor(
       (currentDate.getTime() - startDate.getTime()) / oneDay );
       dayCounter.innerText = numFormat.format(difference);
});
