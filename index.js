const CANT_COUNTRIES_PER_PAGE = 20;
let pageIndex = 0;

function getLanguages(languages) {
  if (languages) {
    let values = Object.values(languages);
    if (values.length > 0) {
      let string = '';
      values.forEach((lan, i) => {
        if (i + 1 == values.length) {
          string += lan;
        } else {
          string += `${lan}, `
        }
      })
      return string;
    }
  }
  return 'No language to display'
}

function tableRow(row, country) {
  return `
  <tr>
    <th scope="row">${row + 1}</th>
    <td>${country.name.official}</td>
    <td>${country.capital || 'No capital to display'}</td>
    <td>${country.region}</td>
    <td>${getLanguages(country.languages)}</td>
    <td>${country.population}</td>
    <td><img  src="${country.flags.png}" height="50px" width="auto"/></td>
  </tr>
  `
}

function getWikipediaInfo(url) {
  let settings = {
    url: url,
    method: 'GET',
    dataType: 'JSON',
    contentType: 'application/JSON',
  }

  $.ajax(settings)
  .then(result => {
    bootbox.alert({
      title: result?.title || 'Error',
      message: result?.extract_html || 'Error',
      callback: function(){ /* your callback code */ }
    });
  });
}

function getPageIndex() {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('page')) {
    return parseInt(searchParams.get('page'));
  }
  return 0;
}

function getCountries() {
  let settings = {
    url: `https://restcountries.com/v3.1/all`,
    method: 'GET',
    dataType: 'JSON',
    contentType: 'application/JSON',
    success: (res) => {
      res.sort((a, b) => { return b.name.official.localeCompare(a.name.official)})
      pageIndex = getPageIndex();
      let start = pageIndex * CANT_COUNTRIES_PER_PAGE;
      let countries = res.slice(start, start + CANT_COUNTRIES_PER_PAGE);
      createNav(res.length);

      let table =  $('#body-table');
      countries.forEach((element, i) => {
        table.append(tableRow(i + start, element))
      });

      $('tr').on("click", function(e) {
        let countryName = e.target.parentElement.children[1].innerHTML;
        let url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + countryName;
        getWikipediaInfo(url);
      });
    },
    error: (err) => {
      console.log('error', err);
    }
  }

  $.ajax(settings);
}

function navNumber(number, href) {
  return `<li class="page-item"><a class="page-link" href="${href}">${number}</a></li>`

}

function createNav(size) {
  let number = Math.ceil(size / CANT_COUNTRIES_PER_PAGE);
  console.log(number);
  let disabledPrevious = pageIndex == 0;
  let disabledNext = pageIndex == number - 1;
  $('#pagination').append(`
    <li class="page-item ${disabledPrevious ? 'disabled' : ''}">
      <a class="page-link" href="${disabledNext ? '#' : '?page=' + (pageIndex - 1)}">Previous</a>
    </li>`)
  for (let i = 0; i < number; i++) {
    $('#pagination').append(navNumber(i + 1, '?page=' + i))
  }
  $('#pagination').append(`
    <li class="page-item ${disabledNext ? 'disabled' : ''}">
      <a class="page-link" href="${disabledNext ? '#' : '?page=' + (pageIndex + 1)}">Next</a>
    </li>`)
}

getCountries();
