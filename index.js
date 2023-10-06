var inputDay = document.getElementsByClassName("input-day")[0]
var elementday = document.getElementsByClassName("day")[0]

var inputMonth = document.getElementsByClassName("input-month")[0]
var elementmonth = document.getElementsByClassName("month")[0]

var inputYear = document.getElementsByClassName("input-year")[0]
var elementyear = document.getElementsByClassName("year")[0]

var btn = document.getElementsByClassName("btn")[0]

var heading = document.querySelectorAll(".heading")

btn.addEventListener("click", function(){
    var date = new Date;
    var current = date.toISOString().split('T')[0]
    currentyear = Number(current.slice(0,4))
    currentmonth = Number(current.slice(5,7))
    currentday = Number(current.slice(8,10))
    bday = Number(inputDay.value)
    bmonth = Number(inputMonth.value)
    byear = Number(inputYear.value)

    // empty day, month, year
    if (bday === 0 || bday > 31){
        heading[0].classList.add("error-heading")
        inputDay.classList.add("error-border")
        if (bmonth === 0 || bmonth > 12){
            heading[1].classList.add("error-heading")
            inputMonth.classList.add("error-border")
        }
        if (byear === 0 || byear > currentyear){
            heading[2].classList.add("error-heading")
            inputYear.classList.add("error-border")
        }
    } else {
        if (bmonth === 0 || bmonth > 12){
            heading[1].classList.add("error-heading")
            inputMonth.classList.add("error-border")
            if (byear === 0 || byear > currentyear){
                heading[2].classList.add("error-heading")
                inputYear.classList.add("error-border")
            }
        }else{
            if (byear === 0 || byear > currentyear){
                heading[2].classList.add("error-heading")
                inputYear.classList.add("error-border")
            }else{
                // reset styles 
                heading[0].classList.remove("error-heading")
                inputDay.classList.remove("error-border")
                heading[1].classList.remove("error-heading")
                inputMonth.classList.remove("error-border")
                heading[2].classList.remove("error-heading")
                inputYear.classList.remove("error-border")
                // calc
                if (bmonth <= currentmonth){
                    if (bday <= currentday){
                        var year = currentyear - byear
                        var month = currentmonth - bmonth
                        var day = currentday - bday
                    }else{
                        year = currentyear - byear
                        month = currentmonth - bmonth - 1
                        day = (31 - bday) + currentday
                    }
                }else{
                    if (inputDay.value <= currentday){
                        year = currentyear - byear - 1
                        month = (12 - bmonth) + currentmonth
                        day = currentday - bday
                    }else{
                        year = currentyear - byear - 1 
                        month = (12 - bmonth) + currentmonth - 1
                        day = (31 - bday) + currentday
                    }
                }
                elementyear.innerHTML = year
                elementday.innerHTML = day
                elementmonth.innerHTML = month
            }
        }
    }
    }
)