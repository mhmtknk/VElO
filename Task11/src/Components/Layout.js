import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ValidationForm from "./ValidationForm";
export default class Layout extends React.Component {
  render() {
    var myArr = [
      "Mehmet KONUK",
      "Yarak Kurek",
      "Deli Bekir",
      "Tehlikeli ADAM",
      "SanaNe LAZIM",
      "Oda GUZELMIS",
      "Vay AMK",
      "Helal OLSUN",
      "Hamza Temurov",
      "Yarak Kurek",
      "Deli Bekir",
      "Tehlikeli ADAM",
      "SanaNe LAZIM",
      "Oda GUZELMIS"
    ];
    return (
      <div>
        <section>
          <Header header="12. Group" />
        </section>
        <div>
          {myArr.map(arr => (
            <li>{arr}</li>
          ))}
        </div>
        <section>
          <ValidationForm />
        </section>
        <div>
          <Footer footer={this.props.footer} />
        </div>
      </div>
    );
  }
}
