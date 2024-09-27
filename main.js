let car = document.querySelector(".car")
let alrt=document.querySelector(".alert")
let btn=document.querySelector("button")
let yuxari = 0
let sol = 0
let qeza=false

window.onkeypress = function (e) {
    if (e.key == "w") {
        yuxari -= 20
        if (yuxari < 0 || qeza==true) {
            alrt.style.display="block"
            qeza=true
            
            car.style.backgroundImage=`url(https://img1.picmix.com/output/stamp/normal/8/2/1/2/2302128_48173.gif)`
        }
        else {
            car.style.top = `${yuxari}px`

            car.style.transform = `rotate(0deg)`
        }

    }
    else if (e.key == "s") {
        yuxari += 20
        if (yuxari > 700 || qeza==true) {
            alrt.style.display="block"
            qeza=true
           
            car.style.backgroundImage=`url(https://img1.picmix.com/output/stamp/normal/8/2/1/2/2302128_48173.gif)`
        }
        else {
            car.style.top = `${yuxari}px`

            car.style.transform = `rotate(180deg)`
        }


    }
    else if (e.key == "d") {
        sol += 20
        if (sol > 700 || qeza==true) {
            qeza=true
            alrt.style.display="block"
            car.style.backgroundImage=`url(https://img1.picmix.com/output/stamp/normal/8/2/1/2/2302128_48173.gif)`
        }
        else {
            car.style.left = `${sol}px`
            car.style.transform = `rotate(90deg)`
        }


    }
    else if (e.key == "a") {
        sol -= 20
        if (sol < 0 || qeza==true) {
            alrt.style.display="block"
            qeza=true
           
            car.style.backgroundImage=`url(https://img1.picmix.com/output/stamp/normal/8/2/1/2/2302128_48173.gif)`
        }
        else {
            car.style.left = `${sol}px`
            car.style.transform = `rotate(270deg)`
        }
        

    }

}
btn.onclick=function(){
    yuxari=0
    sol=0
    qeza=false 
    alrt.style.display="none" 
    car.style.backgroundImage=`url(https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-red-sports-car-top-view-png-image_6564079.png)`
    car.style.top=yuxari
    car.style.left=sol

}