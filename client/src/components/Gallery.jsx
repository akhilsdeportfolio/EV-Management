import { Footer } from "./Footer";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Navbar} from "./Navbar"
let styles = {
    style:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 670,
        height:440,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
    lines:{
        width:10,
        height:65,
        background:"#FF546D",
        marginLeft:-30,
        borderRadius:5
    },
    exterior:{
        position: "relative",
        top: "-55px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "49px",
        color: "#000000", 
    },
    tt:{
        width:100,

    },
    zoomIn:{
        width:"100%",
        height:"100%"
    },
    contain:{
        width: "90%",
        marginLeft: "5%",
    },
    gallery:{
        fontFamily: "Rozha One",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "350%",
        lineHeight: "95px",
        textAlign: "center",
    },
    line:{
        width:"20%",
        height: "10px",
        borderRadius: "10px",
        marginLeft: "40%",
        
    },
    row1Img:{
        display: "grid",
        marginTop: "-19px",
        gridTemplateColumns:" repeat(3,34%)",
        marginBottom:" 40px"
    },
    img:{
        width: "95%",
        height: "237px",
        cursor:"pointer",
    },
    white:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        width: "29.2%",
        height: "10px",
        backgroundColor:"#5D6D61",
        marginRight:"1.7%",
        float:"left"
    },
    grey:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        left:"35.6%",
        width: "29%",
        height: "10px",
        marginRight:"1.7%",
        backgroundColor: "#FF546D",
        float:"left"
    },
    blue:{
        position:"absolute",
        top:"268%",
        borderRadius:10,
        width: "28.4%",
        height: "10px",
        left:"66%",
        backgroundColor: "#0380BE",
        float:"left"
    },
    playButton:{
        display: "grid",
        gridTemplateColumns: "repeat(3,34%)"
    },
    playButtonImg:{
        position: "relative",
        top: "-170px",
        left: "210px",
        width: "40px",
        height: "40px"
    }  
}

export const Gallery = ()=>{
        const [pic,setPic] = React.useState("xyz")
        const [open, setOpen] = React.useState(false);
        const handleOpen = ((e)=>{
        setPic(e.target.src);
            setOpen(true);
            return
        })
        const handleClose = () => setOpen(false);
        function ImageList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <img style={styles.img} src = {el} alt="" onClick = {handleOpen}/>
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )}
    function fun1(){
        setVisible3(false)
        setVisible2(false)
        setVisible(true) 
    }
    function fun2(){
        setVisible3(true)
        setVisible2(false)
        setVisible(false)   
    }
    function fun3(){
        setVisible3(false)
        setVisible2(true)
        setVisible(false)   
    }
    function colorChange(el){
        if(el.target.src === "https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85"){
            fun1()
            setColorLine({...styles.line,background:"rgb(93, 109, 97)"})
            setColorLine2({...styles.lines,background:"rgb(93, 109, 97)"})
            setColor6(whiteRow6)
            setColor(whiteRow1)
            setColor2(whiteRow2)
            setColor3(whiteRow3)
            setColor4(whiteRow4)
            setColor7(whiteRow7)
        }
        else if(el.target.src ==="https://images.firstpost.com/wp-content/uploads/2020/08/bf-car-img-1280.jpg"){
            fun2()
            setColorLine({...styles.line,background:"rgb(3, 128, 190)"})
            setColorLine2({...styles.lines,background:"rgb(3, 128, 190)"})
            setColor6(row6Img)
            setColor(row1Img)
            setColor2(row2Img)
            setColor3(row3Img)
            setColor4(row4Img)
            setColor7(row7Img)
        }
        else if(el.target.src ==="https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85&wm=1"){
            fun3()
            setColorLine({...styles.line,background:"rgb(255, 84, 109)"})
            setColorLine2({...styles.lines,background:"rgb(255, 84, 109)"})
            setColor6(redRow6)   
            setColor(redRow1)
            setColor2(redRow2)
            setColor3(redRow3)
            setColor4(redRow4)
            setColor7(redRow7)
        }
    }
    function ColorList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <img style={styles.img} src = {el} alt="" onClick = {colorChange} />
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )
    }

    function VideoList(props){
        const images = props.image;
        const listItems = images.map((el)=>
            <iframe  width="95%" height="245" src={`https://www.youtube.com/embed/${el}?autoplay=1&mute=1`} title = "Nexon" onClick = {handleOpen} >
            </iframe>
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )
    }

    const row1Img = ["https://images.firstpost.com/wp-content/uploads/2020/08/bf-car-img-1280.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1576845369560/front-left-side-47.jpg","https://cdni.autocarindia.com/ExtraImages/20210108070223_Nexon_EV_opening.jpg"]
    const row2Img = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGBjf9IclLOHsBZhja6eK_TWI1zEr5UQnsA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66IEgSe3r8W1wyHgwQTjhfnoBpRNHQy-10w&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNqhb-FJqFgt19kcP0m4fTxF0k8Ttb2NJXw&usqp=CAU"]    
    const row3Img = ["https://www.autocarpro.in/Utils/ImageResizer.ashx?n=https://www.autocarpro.in/Portals/0/userfiles/17/WEB%20Nexon%20EV%20interior.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAB5_wp-Z2y7UXq-UKpZ88g7cRnF4uyn_qyA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8m3dS5dliIjFcV7D2XuNeSGod1UJNlpSu6Q&usqp=CAU"]
    const row4Img = ["https://images.hindustantimes.com/auto/img/2021/09/30/600x338/Tata_Punch_screen_1632996428467_1632996478299.png","https://imgctcf.aeplcdn.com/thumbs/p-nc-b-ver202102161944/images/car-data/big/2021Ct/tata-nexon-ev-15291.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4USfznGgQIxX1bKLQFvruRmUQgj8_FVU_1cvvUN59ng1tYRS9YicfhghL6G6WGt9kNs&usqp=CAU"]
    const row5Img = ["https://imgd.aeplcdn.com/664x374/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148706.jpeg?q=85&wm=1","https://images.firstpost.com/wp-content/uploads/2020/08/bf-car-img-1280.jpg"]
    const row6Img = ["https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210108070223_Nexon_EV_opening.jpg&w=726&h=482&q=75&c=1","https://imgd.aeplcdn.com/642x361/n/cw/ec/93525/left-front-three-quarter0.jpeg?wm=1&q=85","https://bl.thgim.com/specials/auto-focus/3y91wt/article30693544.ece/alternates/WIDE_615/bl31Nexon6"]
    const row7Img = ["72UlK3A2lAw","JsTY1jGOvO0","-XAZ8wgqik4"]
    

    const whiteRow1 = ["https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/side-view-(left)-90.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/rear-left-view-121.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/front-view-118.jpg"];
    const whiteRow2 = ["https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7384/1614326304397/top-view-117.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/exterior-image-164.jpg","https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/7297/1579769179487/exterior-image-166.jpg"]
    const whiteRow3 = ["https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/8497/Tata-Nexon-XZA-Plus-Dark-Edition/1625825579881/dashboard-59.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/sun-roof-moon-roof-81.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/child-seat-201.jpg"]
    const whiteRow4 = ["https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/rear-view-mirror-courtesy-lamps-64.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/8497/Tata-Nexon-XZA-Plus-Dark-Edition/1625825579881/rear-seats-52.jpg","https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Nexon/7988/1617771639398/knob-selector-184.jpg"]
    const whiteRow6 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqxD2NHW3KlgwhSvcqc-J9Vqk1Swr90Sklg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsjY4jlb7PVczQoNJTKzgnrWP7CsMHFJz_g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtj_uqVQToU11HHjBVUBJ2tQpgZMLpfflMA&usqp=CAU"]
    const whiteRow7 = ["3E_EAGt_RJU","zr7VE0FnwQY","tHNMWvW3BR8"]
    
    const [color,setColor] = React.useState(row1Img)
    const [color2,setColor2] = React.useState(row2Img)
    const [color3,setColor3] = React.useState(row3Img)
    const [color4,setColor4] = React.useState(row4Img)
    const [color6,setColor6] = React.useState(row6Img)
    const [color7,setColor7] = React.useState(row7Img)
    
    const redRow1 =["https://imgd.aeplcdn.com/1056x594/cw/ec/42356/Mahindra-XUV300-Exterior-170844.jpg?v=20191909172727&wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148142.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/43897/mahindra-xuv300-action-10.jpeg?wm=1&q=85"]
    const redRow2 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Exterior-160493.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148039.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148059.jpg?wm=1&q=85"]
    const redRow3 = ["https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-dashboard.jpeg?q=85&wm=1","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-instrument-cluster.jpeg?q=85&wm=1","https://imgd.aeplcdn.com/1056x594/n/cw/ec/26918/xuv300-interior-front-row-seats.jpeg?q=85&wm=1"]
    const redRow4 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Interior-160476.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/n/cw/ec/53749/ac-controls22.jpeg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Interior-160492.jpg?wm=1&q=85"]
    const redRow6 = ["https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148147.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/38319/Mahindra-XUV300-Exterior-148145.jpg?wm=1&q=85","https://imgd.aeplcdn.com/1056x594/cw/ec/40702/Mahindra-XUV300-Exterior-160497.jpg?wm=1&q=85"] 
    const redRow7 = ["1kM-JVd4FLM","wZA1oxypzuE","wygbf1VJp0U"];

    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
    const [visible3, setVisible3] = React.useState(true);

    const [colorLine,setColorLine] = React.useState({...styles.line,background:"rgb(3, 128, 190)"})
    const [colorLine2,setColorLine2] = React.useState({...styles.lines,background:"rgb(3, 128, 190)"})
    return (
        <>
           <Navbar/> 
                <div style={styles.contain}>
                    <div style={styles.gallery}>Gallery</div>
                        <div style={colorLine}></div>
                            <div style = {
                                colorLine2
                                    }></div>
                                        <div style={styles.exterior}>Exterior</div>
                                            <ImageList image = {color}/>
                                        <ImageList image = {color2}/>
                                    <div style = {
                                colorLine2
                            }></div>
                        <div style={styles.exterior}>Interior</div>
                    <ImageList image = {color3}/>
                <ImageList image = {color4}/>
            <Modal
        open={open}
    onClose={handleClose}
aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
        >
            <Box sx={styles.style}>
                <img src={pic} alt="" style = {styles.zoomIn} />
                    </Box>
                        </Modal>
                            <div style = {
                                colorLine2
                                    }></div>
                                <div style={styles.exterior}>Colors</div>
                            <ColorList image = {row5Img}/>
                        <div style = {styles.selectColor}>
                    {visible && <p style = {styles.white}></p>}
                {visible2 &&  <p style = {styles.grey}></p>}
            {visible3 && <p style = {styles.blue}></p>}
        </div>
    <div style = {
colorLine2
    }></div>
        <div style={styles.exterior}>Road Test</div>
            <ImageList image = {color6}/>
                <div style = {
                    colorLine2
                        }></div>
                <div style={styles.exterior}>Videos</div>
            <VideoList image = {color7}/>
         <div style = {styles.playButton}></div>
    </div>
<Footer/>
        </>
    )
}