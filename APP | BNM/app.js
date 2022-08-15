const getRatesForDate = (date) => {
    const URL = `https://www.bnm.md/ro/official_exchange_rates?get_xml=1&date=${date}`

    const xhr = new XMLHttpRequest()
    xhr.open("GET", URL)
    xhr.send()


    xhr.onload = () => {
        let res = xhr.responseText

        //parsing XML
        console.log(res)
    }
 }


 /*

js-->getRatesForDate() --> AJAX--> req(127.0.0.01)--->BNM(API server)
                   <-------res(Allow cross Origin)<----


 */
