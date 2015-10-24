var disciplines = [
    {text:'Social Science'},
    {text: 'Economics'},
    {text :'Anthropology'},
    {text:'Law'},
    {text:'Communication'},
    {text:'History'},
    {text:'Linguistics'},
    {text:'Politics'},
    {text:'Sociology'},
    {text:'Geography'},
    {text:'Philosophy'}
];

var links = [
    {0, 1},
    {0, 2},
    {0, 3},
    {0, 4},
    {0, 5},
    {0, 6},
    {0, 7},
    {0, 8},
    {0, 9},
    {0, 10}
];

var graph = d3.select('#definition #disciplines')
                        .append('svg')
                        .attributes({'height':600, 'width':800});



