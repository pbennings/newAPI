window.onload = function () {
  init()
}

function init() {
  let httpRequestForAPI

  function makeRequestForAPI() {
      httpRequestForAPI = new XMLHttpRequestForAPI()

      if (!httpRequestForAPI) {
          alert("Giving up! Cannot create an XMLHTTP instance")
      }

      httpRequestForAPI.onreadystatechange = processContents
      httpRequestForAPI.open("GET", "https://api.breezometer.com/pollen/v2/current-conditions?lat={latitude}&lon={longitude}&key=b5a85587da95498d8cc591beb2ba1e3c&features={Features_List}
      ")
      httpRequestForAPI.send()
  }

  function processContentsForAPI() {
      if (httpRequestForAPI.readyState === XMLHttpRequest.DONE) {
          if (httpRequestForAPI.status === 200) {
              let data = httpRequestForAPI.responseText

              if (data) {
                  data = JSON.parse(data)

                  if (data.rates) createDataForAPI(data.rates)
              }
          } else {
              alert("There was a problem with request")
          }
      }
  }

  function createDataForAPI(items) {
      let openSpace = document.querySelector(".masthead mb-auto > .inner")
      let data = ``
      
      for (let item in items) {
          if (items.hasOwnProperty(item)) {
              cards += `<div class="card mb-4 shadow-sm">
                              <div class="card-header">
                                  <h4 class="my-0 font-weight-normal">${item}</h4>
                              </div>
                              <div class="card-body">
                                  <h1 class="card-title pricing-card-title">${ items[item] }</h1>
                              </div>
                          </div>`
          }
      }

      openSpace.innerHTML = data
  }

  makeRequest()
}