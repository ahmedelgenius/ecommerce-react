// import { Component, React } from "react";

//     const Hello =()=>{
// const [val1,set]

//     con
//   constructor() {
//     super();
//     this.state = {
//       val1: 0,
//       val2: 100,
//     };
//   }

//   componentDidMount() {
//     this.sliders = document.querySelectorAll(".price-slider input");
//   }

//   updatePriceLabels = (e, slider) => {
//     let val1, val2;
//     if (slider === "one") {
//       val1 = parseInt(e.target.value);
//       val2 = parseInt(this.state.val2);

//       if (val1 >= val2 && val2 < 97) {
//         this.setState({
//           val1: val1,
//           val2: val2 + 3,
//         });
//       } else if (val1 >= 97) {
//         this.setState({
//           val1: 97,
//           val2: 100,
//         });
//       } else if (val1 <= val2) {
//         this.setState({
//           val1: val1,
//           val2: val2,
//         });
//       } else {
//         this.setState({
//           val1: val1,
//           val2: val2,
//         });
//       }
//     } else if (slider === "two") {
//       val1 = parseInt(this.state.val1);
//       val2 = parseInt(e.target.value);
//       if (val2 <= val1 && val1 < 3) {
//         this.setState({
//           val1: 0,
//           val2: val1 + 3,
//         });
//         console.log(this.sliders);
//         if (val1 > 0 || val2 < 99) {
//           this.sliders[0].style.background = this.sliders[1].style.background =
//             "-webkit-gradient(linear, 0 0,100% 0, color-stop(0, white), color-stop(" +
//             val1 / 100 +
//             ", white),color-stop(" +
//             val1 / 100 +
//             ", #f0f0f0), color-stop(" +
//             val2 / 100 +
//             ", #f0f0f0), color-stop(" +
//             val2 / 100 +
//             ", white))";
//         } else {
//           this.sliders[0].style.background = this.sliders[1].style.background =
//             "";
//         }
//       }
//     }
//   };
//   render() {
//     return (
//       <div className="price-slider">
//         <input
//           value={this.state.val1}
//           min="0"
//           max="100"
//           step="0.5"
//           type="range"
//           onChange={(e) => this.updatePriceLabels(e, "one")}
//         ></input>
//         <input
//           value={this.state.val2}
//           min="0"
//           max="100"
//           step="0.5"
//           type="range"
//           onChange={(e) => this.updatePriceLabels(e, "two")}
//         ></input>
//       </div>
//     );
//   }
// }

// export default Hello;
