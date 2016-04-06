"use strict";

var $ = require("jquery");

import React from "react";
import ReactDOM from "react-dom";

class Sample extends React.Component {
  render() {
    return(<a href="#" class='btn btn-success'>This is content is rendered by react</a>);
  }
}


var component = {
  div: "this is a content in the component object",
  show: "the content will be alerted"
};

const app = document.getElementById('react-app'); // $('div#react-app');

let Person = require("babel!./Person.js");

var me = new Person("Emmanuelsss");
console.log(me);
console.log(me.introduce());

$("div#div1").html(component.div);
// alert(component.show);
$("div#div1").append(me.name);

ReactDOM.render(<Sample/>, app);


