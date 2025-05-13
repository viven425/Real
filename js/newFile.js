// 圖片輪播
const items = document.querySelectorAll(".carousel-item");
let current = 0;

setInterval(() => {
  items[current].classList.remove("active");
  current = (current + 1) % items.length;
  items[current].classList.add("active");
}, 5000);


//图片放大缩写//
// import { useEffect } from 'react'
// // import $ form 'Jquery' 为了控制Jquery ，需要按照成功才可以。 
// import './App.css'
// export default function App() {
//     useEffect(()=>{    一定要在这里面写是Rreact 里面的
//         //当话术碰到图片区域时，放大图片
//         $ ('.cssAnim1').on('mouseover',function(){
//             $(this).addClass('imgScale');
//         })

//         //当话术碰到图片区域时，还原图片
//          $ ('.cssAnim1').on('mouseout',function(){
//             $(this).removeClass('imgScale');
//         })
//     },[])


//     return (
//         <div>
//             <a href="#" className='cssAnim1'>
//             <img src="./img/App.jsx" alt="" /></a>
//         </div>
//     )
// }