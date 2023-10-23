import getConfig from "next/config";
import React, { useState, useEffect, useRef } from "react";
const { publicRuntimeConfig } = getConfig();

function Footer(props) {
  const { menuFooter, dataSite } = props;
  const { siteProfiles } = dataSite;
  const [src, setSrc] = useState("");
  const logoRef = useRef();
  // console.log(dataSite);
  return (
    <div className="container-fuild">
      <div className="row">
        <div class="col-md-12 hidden-sm hidden-xs subscribe_and_socials">
          <div
            class="container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div class="col-md-4 col-sm-3 col-xs-12 subscribe">
              <h1>Uu Đãi Hấp Dẫn Liên Hệ Ngay</h1>
              <h2> {siteProfiles[0].hotline}</h2>
              <p>hoặc đăng ký để nhận tư vấn trực tiếp</p>
            </div>
            <form class="col-md-8 col-sm-8 col-xs-12 subscribe-form">
              <input
                class="input_subscribe_phone"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required=""
                placeholder="SĐT liên hệ"
              />
              <input
                class="input_subscribe_email"
                id="email"
                type="email"
                name="email"
                placeholder="Email liên hệ"
                required=""
              />
              <button type="button" class="btn_btn-subscribe" name="subscribe">
                <span>ĐĂNG KÝ NGAY</span>
              </button>
            </form>
          </div>
        </div>
        <section class="footer-container">
          <footer class="col-md-12 footer">
            <div class="container padding_container">
              <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                  <div class="topfooter_container">
                    <div class="footer_infor">
                      <a
                        href="https://phongkhamthaithinh.vgasoft.vn/"
                        class="logo_footer"
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9Ikdyb3VwIDYwNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwMC44MTgiIGhlaWdodD0iNTMuNTYiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzg2NyI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NDMiIGQ9Ik01MC45NzMgMTUuODU5YTI0LjggMjQuOCAwIDAwLTMuMzYxLTQuNiAyMi44NTQgMjIuODU0IDAgMDAtMTQuOTQtNy4zNzQgMjMuMzkxIDIzLjM5MSAwIDAwLTE2LjAwNSAzLjkxNCAyMS44NTggMjEuODU4IDAgMDAtOS4xODQgMTQuMzA2IDE4LjY1MiAxOC42NTIgMCAwMC4xMTcgNy43NzcgOC43IDguNyAwIDAwMi43NjYgNC43NzMgNC44NTcgNC44NTcgMCAwMDQuNTM2IDEuMjY0YzMuNzUtMS4wNzkgNy40LS42NDggMTEuMDc0LjI1NGExMS42IDExLjYgMCAwMDYuMTEzLS4yNTRjLjg4NS0uMjU3IDEuNzY2LS41NCAyLjY2My0uNzUxIDEuMzM4LS4zMTUgMS45MTcuMyAxLjU1MiAxLjYyYTMuOSAzLjkgMCAwMS0xLjAyMiAxLjc0MSAxMC4wNzggMTAuMDc4IDAgMDEtNy45MyAzLjE2OSA5LjQyOSA5LjQyOSAwIDAwLTMuNjgxLjI4NWMtLjk2Ni4zMzgtMS45NDEuNzg2LTIuMDIzIDEuOTQ2LS4wOCAxLjEyMy44IDEuNzE1IDEuNjcxIDIuMTg1YTE0LjMwNyAxNC4zMDcgMCAwMDUuOSAxLjQxMmM1LjMzMy4zNyA5LjgyNi0xLjY0NSAxMy44NDktNC45NDEgMS40NDctMS4xODUgMi44NC0yLjQzNiA0LjI2MS0zLjY1MWE3LjczNyA3LjczNyAwIDAxMS44Mi0xLjIgMi4xMTYgMi4xMTYgMCAwMS45ODEtLjIzNWMuODY2LjA0NiAxLjA2Ni4zNzMuNjY2IDEuMTM0LTQuNDM4IDguNDQ0LTExLjMzMSAxMy41LTIwLjgyMyAxNC43MTZBMjYuNjg1IDI2LjY4NSAwIDAxLjQ2MyAzMS44MzEgMjYuODA3IDI2LjgwNyAwIDAxMjIuMDA5LjQ0NWEyNi44NjMgMjYuODYzIDAgMDEyOC44NTcgMTQuNjczLjcyNS43MjUgMCAwMS4xMDcuNzQxeiIgZmlsbD0iIzFiYzVkMSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzQ0IiBkPSJNNDYuNTE4IDI2LjQ4OHY0LjM3M2MwIDEuMDc5LS4xMTQgMS4xOS0xLjIyNiAxLjE5LTIuODkxIDAtNS43ODIuMDE4LTguNjczLS4wMTQtLjU2My0uMDA2LS42NzcuMTUyLS42NjkuNjkxYTUuNCA1LjQgMCAwMS0uMDU5IDEuMjgyYy0uMTc5LjE0NS0uNzQ5LjEwNS0xLjE0NS4xODgtMS43MDkuMzU4LTMuMzM2IDEuMDI0LTUuMDc4IDEuMjdhMTMuNDY5IDEzLjQ2OSAwIDAxLTQuNTM4LS40MjljLS4yNzUtLjA1NC0uMzMzLS4yMDgtLjMyOC0uNDYxLjAxNC0uNjMxLS4wMy0xLjI2Ni4wMTQtMS44OTQuMDM2LS41MTEtLjEyNy0uNjUtLjY0MS0uNjQ1LTIuOTE1LjAyNi01LjgzLjAxMy04Ljc0NS4wMTItMS4wODEgMC0xLjE4Mi0uMS0xLjE4My0xLjE1M1YyMi4wOGMwLTEuMDY5LjEtMS4xNiAxLjE3NC0xLjE2MSAyLjkxNiAwIDUuODMxLS4wMTMgOC43NDYuMDEuNSAwIC42NTYtLjEyMi42NTItLjY0LS4wMjUtMi45MzktLjAxMy01Ljg3OS0uMDEzLTguODE4IDAtLjk4MS4xNTYtMS4xMzkgMS4xMzctMS4xNGg4Ljg5MWMuOTYyIDAgMS4xMjQuMTY2IDEuMTI1IDEuMTYxIDAgMi45MTUuMDE1IDUuODMtLjAxIDguNzQ1IDAgLjU0MS4xMzguNy42OS43IDIuOTM5LS4wMjggNS44NzgtLjAxNSA4LjgxOC0uMDEyLjkzNyAwIDEuMDU3LjEyNCAxLjA1OSAxLjA1LjAwNSAxLjQ5Ni4wMDIgMy4wMDcuMDAyIDQuNTEzeiIgZmlsbD0iIzAxNWM5YyIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzQ1IiBkPSJNMjkuODE4IDQyLjYwNmExMi44IDEyLjggMCAwMDYuMTM4LTMuNDA4YzAgLjk4NC4wMSAxLjgyIDAgMi42NTUtLjAxLjYtLjM4Ni43NjEtLjkyNS43NTctMS43NC0uMDExLTMuNDc2LS4wMDQtNS4yMTMtLjAwNHoiIGZpbGw9IiMwMTVjOWMiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc0NiIgZD0iTTUxLjIzMiAxNi4wNzVhMS4yNzYgMS4yNzYgMCAwMS4zNTIuOTY2Yy0uMTY1LS4zNDMtLjM5NC0uNTU4LS4zNTItLjk2NnoiIGZpbGw9IiMzZGFjYjAiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc0NyIgZD0iTTUxLjEyNiAxNS44NjRhLjQuNCAwIDAxLjA0LjA5NGMwIC4wMTItLjAyNy4wMy0uMDQxLjA0NWEuNDI5LjQyOSAwIDAxLS4wNC0uMDkzYy0uMDAzLS4wMTIuMDI2LS4wMzEuMDQxLS4wNDZ6IiBmaWxsPSIjM2RhY2IwIi8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NDgiIGQ9Ik01MC44MzEgMTUuNjEzYTcuNjQ2IDcuNjQ2IDAgMDEuNS45NzRsLjE0NC0uMTM2cy0uNDU3LTEuMDU4LS41MzMtMS4yIiBmaWxsPSIjM2RhY2IwIi8+PC9nPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzg2OCIgZmlsbD0iIzAxNWM5YyI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NDkiIGQ9Ik02Mi44MDMgMTcuNzMzYS40ODguNDg4IDAgMDEuNDc2LS4yNDFoMy41Yy40MDYgMCAuNTMxLjEuNjQzLjQ5M3EyLjE5MyA3LjY3NiA0LjM5MiAxNS4zNWEuNDM0LjQzNCAwIDAwLjI0LjI3MWMuMTkyLjA0OS4yNDMtLjEzNS4yODYtLjI3OXEuNjctMi4yMzQgMS4zMzUtNC40NjhsMy4yNC0xMC44NzhjLjEyNC0uNDE4LjIxOS0uNDg5LjY2Mi0uNDg5aDIuOThjLjUyNyAwIC42NjkuMi41LjdsLTEuNDc3IDQuNDI0TDc0Ljk1NyAzNi41YTMuMjEgMy4yMSAwIDAxLS4yLjQ4MS44MTUuODE1IDAgMDEtLjY2NC40NDUgNC4xODIgNC4xODIgMCAwMS0uNDUxLjAyOGgtMy43NDNhLjk3Ny45NzcgMCAwMS0xLjA4MS0uODA3Yy0uMjM0LS43LS40NTUtMS40LS42ODItMi4xMDVsLTUuMTY5LTE1Ljk4M2MtLjA2My0uMTk1LS4xMTItLjM5NC0uMTY4LS41OTF6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NTAiIGQ9Ik05OS4wMzMgMzIuMTEzYzAgMS4yNjMtLjAxIDIuNTI3LjAwNSAzLjc5YS45ODUuOTg1IDAgMDEtLjYwNy45ODQgOC41NDkgOC41NDkgMCAwMS0yLjM1MS42NjQgMTYuOCAxNi44IDAgMDEtNi42MjYtLjEyNyA5LjE2MyA5LjE2MyAwIDAxLTQuNjM0LTIuNDg4IDguNDM1IDguNDM1IDAgMDEtMi4yLTQuMTU0IDEzLjE1IDEzLjE1IDAgMDEuNS03Ljg0MiA4LjcgOC43IDAgMDE1LjY2MS01LjIgMTQuNzcyIDE0Ljc3MiAwIDAxNS4yODktLjY0NSAxMy4zMzMgMTMuMzMzIDAgMDEzLjgxMi42NDcgNS4zNzMgNS4zNzMgMCAwMS43NTkuMzM4LjY2Ny42NjcgMCAwMS4zNjQuNjQ3Yy0uMDA3Ljc5NCAwIDEuNTg5IDAgMi4zODRxMCAuNzUtLjcwOS40NjJjLS42MTYtLjI1Mi0xLjIxNS0uNTU2LTEuODQ1LS43NjVhOC40MzQgOC40MzQgMCAwMC01LjUtLjA1NCA1LjUgNS41IDAgMDAtMy41OSAzLjgyMSA5LjkxNiA5LjkxNiAwIDAwLjAxOCA2LjE4NyA1LjIgNS4yIDAgMDA0LjU1OCAzLjY2IDUuOTg4IDUuOTg4IDAgMDAxLjk2OSAwYy41OTItLjExNC43NDEtLjMuNzQxLS45di01LjJjMC0uNTIzLjEwNS0uNjMuNjI0LS42M2gzLjE0N2MuNTE4IDAgLjYyMS4xMDguNjIxLjYzNHEtLjAwNiAxLjg5Mi0uMDA2IDMuNzg3eiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzUxIiBkPSJNMTEwLjM5OSAxNy40NjNoMi4xYy41ODYgMCAuNzguMTQxLjk1NC42OTRxMi44NjkgOS4wNzQgNS43MzQgMTguMTQ4YTUuOTczIDUuOTczIDAgMDEuMTY0LjZjLjA3OS4zODItLjAzNS41MTgtLjQyMi41MjRoLTMuMzg3Yy0uNDg0IDAtLjU2NS0uMDYtLjcwOC0uNTI4bC0xLjUzNi01Yy0uMTQtLjQ1Ny0uMTk0LS41MDYtLjY2OC0uNTA3aC01LjJjLS40MzIgMC0uNTEzLjA2NS0uNjQyLjQ4NXEtLjc3OCAyLjUyMy0xLjU1MiA1LjA0OGMtLjE0My40NjctLjE5NC41LS42ODkuNWgtMi43MTdjLS41NjUgMC0uNy0uMTU2LS41MjctLjcuMzM1LTEuMDgzLjY4OS0yLjE2MSAxLjAzOS0zLjI0cTIuNDY4LTcuNjE1IDQuOTM5LTE1LjIzYy4yMTItLjY1MS40LS43OTMgMS4wODgtLjc5NHptLS4zMzYgMTEuMDU1aDEuODU4Yy40IDAgLjQ2Ni0uMDgzLjM1NC0uNDY4cS0uOTQ3LTMuMjc5LTEuOS02LjU1OGExLjQ3MSAxLjQ3MSAwIDAwLS4xLS4yOTEuMTgxLjE4MSAwIDAwLS4zMzctLjAwOS45NDkuOTQ5IDAgMDAtLjA4My4yMjFxLS42OTEgMi4zMjYtMS4zNzkgNC42NTJsLS42IDIuMDMxYy0uMDk0LjMzMy0uMDE5LjQyLjMyMi40MjFoMS44NjV6Ii8+PC9nPjxnIGRhdGEtbmFtZT0iR3JvdXAgMzg2OSIgZmlsbD0iIzAxNWM5YyI+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NTIiIGQ9Ik0xMjYuNjYyIDI3Ljc1OGExMy43MDYgMTMuNzA2IDAgMDEuOS01LjA4MiA4LjI2NyA4LjI2NyAwIDAxNS42LTUuMDM0IDEzLjQ3IDEzLjQ3IDAgMDE4LjI1LjEzN2MuODI1LjI3OS45MTMuNC45MTMgMS4yNjd2Mi4wOThjLS4wMjkuNTE4LS4yMzcuNjUzLS43MTQuNDUtLjQ1Mi0uMTkzLS44OTQtLjQxMi0xLjM1LS41OTVhNy40MjQgNy40MjQgMCAwMC00LjUzMi0uMzkzIDUuMTgzIDUuMTgzIDAgMDAtMy44NzQgMy41ODEgMTAuNjk0IDEwLjY5NCAwIDAwLS41IDQuMjU0IDguMDgxIDguMDgxIDAgMDAuNjQ4IDIuODQgNS4wODQgNS4wODQgMCAwMDQuMTExIDMuMDg5IDcuNjY5IDcuNjY5IDAgMDA1LjA2Mi0uOSAzLjcyNyAzLjcyNyAwIDAxLjYtLjI4MmMuMzI3LS4xMTMuNTI2LjAxMS41MzIuMzU0LjAxNC44NDIuMDA4IDEuNjg0LS4wMDcgMi41MjZhLjg0NC44NDQgMCAwMS0uNTc0Ljc4MyA5LjU3NyA5LjU3NyAwIDAxLTEuNy41ODYgMTUuMDYxIDE1LjA2MSAwIDAxLTcuMTcyLS4xNTEgNy45NzMgNy45NzMgMCAwMS01Ljc2NS01Ljk3MSAxMy44NTkgMTMuODU5IDAgMDEtLjQyOC0zLjU1N3oiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc1MyIgZD0iTTE2Mi41NjQgMjkuNzUxVjIyLjc5YTEuOTE3IDEuOTE3IDAgMDEuMDIyLS4zMzIuMzg3LjM4NyAwIDAxLjM5LS4zNDljLjE4Mi0uMDEuMzY1LS4wMTEuNTQ4LS4wMTFoMi42N2MuNDI1IDAgLjQ4My4wNDguNTYzLjQ2NmEuMjU0LjI1NCAwIDAwLjMzNy4yMTQgNC43MzkgNC43MzkgMCAwMC43NS0uMjE5IDEwLjg1MyAxMC44NTMgMCAwMTIuMzI4LS43NDggNy40MTMgNy40MTMgMCAwMTMuNi4yNjIgMy44MDYgMy44MDYgMCAwMTIuNDY4IDIuODM4IDEwLjEgMTAuMSAwIDAxLjMzIDIuNTkzYy4wMTQgMy4xMDcuMDA5IDYuMjE0LjAxIDkuMzIxIDAgLjQzNi0uMTY5LjYtLjYxMi42aC0zLjA3NmMtLjQ2OCAwLS42MDktLjE0MS0uNjEtLjYxNCAwLTIuNzY1LjAxLTUuNTMxLS4wMDgtOC4zYTEwLjg1NCAxMC44NTQgMCAwMC0uMTczLTEuOTY0IDEuOTc4IDEuOTc4IDAgMDAtMS45MTYtMS43NzUgNC40NCA0LjQ0IDAgMDAtMi4yMDcuMjA1IDEuNTMyIDEuNTMyIDAgMDAtMS4xMTIgMS42MTZ2MTAuMDZjMCAuMSAwIC4yMDctLjAwNi4zMWEuNDI4LjQyOCAwIDAxLS40NTQuNDUxcS0xLjY4LjAxNC0zLjM2MSAwYS40NTUuNDU1IDAgMDEtLjQ3MS0uNDQ2IDIuMjc0IDIuMjc0IDAgMDEtLjAwOC0uMjg2cS0uMDAzLTMuNDYzLS4wMDItNi45MzF6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NTQiIGQ9Ik0yMDAuODE2IDI0LjIyNmMwIC4zNDkuMDA1LjcgMCAxLjA0OS0uMDA3LjM4LS4yMzEuNTMxLS41ODcuMzgyYTUuNDA4IDUuNDA4IDAgMDEtLjY1MS0uMzQ2IDUuMDQ3IDUuMDQ3IDAgMDAtMy4zLS42NjIgMy41MjMgMy41MjMgMCAwMC0zLjA2NCAyLjM3OSA3LjQ0NiA3LjQ0NiAwIDAwLS4xMyA0Ljk1NSAzLjY3MyAzLjY3MyAwIDAwNC4wNjkgMi42NSA2LjI0OCA2LjI0OCAwIDAwMi40LS43MTUgNC43MyA0LjczIDAgMDEuNjI4LS4yODMuNDIyLjQyMiAwIDAxLjYxNy40MDZjLjAyLjcyMi4wMTcgMS40NDUgMCAyLjE2OGEuNjYxLjY2MSAwIDAxLS40ODIuNiAxMi4yMzYgMTIuMjM2IDAgMDEtMS42NDcuNTMxIDEyLjM0NSAxMi4zNDUgMCAwMS01LjAzOC4wODEgNS45NjIgNS45NjIgMCAwMS00Ljk4NS00Ljc2MyAxMS4yMjMgMTEuMjIzIDAgMDEuMTQ1LTYuMDIzIDYuNDEzIDYuNDEzIDAgMDE0LjYyMy00LjUxOSAxMC42MDkgMTAuNjA5IDAgMDE2LjI4Ni4xIDUuNjY3IDUuNjY3IDAgMDEuNzE5LjMxMS42NjEuNjYxIDAgMDEuMzk0LjY1MmMtLjAwNy4zNDkgMCAuNyAwIDEuMDQ5eiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNzU1IiBkPSJNMTQ5LjY5OSAyNi45OTd2OS42NzZjMCAuMSAwIC4yMDctLjAwNi4zMWEuNDE4LjQxOCAwIDAxLS40MzkuNDM3cS0xLjY5Mi4wMTItMy4zODQgMGEuNDU2LjQ1NiAwIDAxLS40NjktLjQ3MmMtLjAwNi0uMDcxIDAtLjE0MyAwLS4yMTRWMTcuMDk3YS41MjMuNTIzIDAgMDEuNTktLjU4OGMuNDIxLS4wMDguODQyIDAgMS4yNjMgMGgxLjY0NGMuNyAwIC44LjEuOC43OTN6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NTYiIGQ9Ik0xNTguMjgyIDI5Ljc3M3Y3LjEyNmEuNDc3LjQ3NyAwIDAxLS41MzkuNTI1cS0xLjYwOS4wMDctMy4yMTcgMGEuNDg4LjQ4OCAwIDAxLS41NDEtLjUyOVYyMi44MDlhMS45NTYgMS45NTYgMCAwMS4wMTMtLjMwOS40MjIuNDIyIDAgMDEuNDEzLS4zODljLjA5NS0uMDA4LjE5LS4wMTMuMjg1LS4wMTNoMi44ODRjLjU5IDAgLjcuMTE3LjcuNzE1cS4wMDMgMy40OC4wMDIgNi45NnoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc1NyIgZD0iTTE4NS4wMzIgMjkuNzQ1djcuMTI2Yy0uMDE0LjM4MS0uMTguNTQ3LS41NjUuNTQ4aC0zLjE0NmMtLjQwNyAwLS41ODMtLjE3NS0uNTg4LS41NzlWMjIuODI2YTIuMDg4IDIuMDg4IDAgMDEuMDE0LS4zMzMuNDE5LjQxOSAwIDAxLjQxMy0uMzg4Yy4xLS4wMDguMjA2LS4wMTMuMzA5LS4wMTNoMi43ODljLjY3OSAwIC43NzUuMDk1Ljc3NS43NjRsLS4wMDEgNi44ODl6Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI3NTgiIGQ9Ik0xNTYuMDQ5IDE5LjkzM2E4LjUzNiA4LjUzNiAwIDAxLS44NjYtLjEzMSAxLjkgMS45IDAgMDEtMS41MTktMi4yIDEuODMgMS44MyAwIDAxMS41MzgtMS43MzIgMy45MzYgMy45MzYgMCAwMTEuODQxIDAgMS44NzEgMS44NzEgMCAwMTEuNTQgMi4wNjkgMS45IDEuOSAwIDAxLTEuODYzIDEuOTQyYy0uMTk3LjAxNy0uMzk2LjAyOS0uNjcxLjA1MnoiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjc1OSIgZD0iTTE4Mi44ODkgMTUuNzQxYy4zLjA0LjYuMDU2Ljg5My4xMjRhMS44NjIgMS44NjIgMCAwMTEuNTUyIDIuMDM2IDEuODYgMS44NiAwIDAxLTEuNjQ0IDEuOTM3IDQuMTYzIDQuMTYzIDAgMDEtMS42NTctLjAwNyAxLjkyOSAxLjkyOSAwIDAxLTEuNjE5LTIuMjQ0IDEuOTYyIDEuOTYyIDAgMDEyLjA0Mi0xLjhjLjE0Mi0uMDEuMjg2IDAgLjQyOSAweiIvPjwvZz48L3N2Zz4="
                          alt="My Clinic"
                        />
                      </a>
                    </div>
                    <ul>
                      <li
                        class="address_footer"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS40NTUiIGhlaWdodD0iMjEuOTk0Ij48cGF0aCBkPSJNMTYuNjA2IDIuODQ5YTkuNzI4IDkuNzI4IDAgMTAtOC45NDkgMTYuMzg0bDIuMDcxIDIuNzYxIDIuMDcyLTIuNzYxYTkuNzI4IDkuNzI4IDAgMDA0LjgwNi0xNi4zODR6bS02Ljg3OC0uMzFhNy4xNDUgNy4xNDUgMCAxMS03LjE0NSA3LjE0NSA3LjE1MyA3LjE1MyAwIDAxNy4xNDQtNy4xNDV6IiBmaWxsPSIjMDE1YzljIi8+PHBhdGggZD0iTTkuODI0IDYuNDU3djYuNDI4bTMuMjE0LTMuMjE0SDYuNjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAxNWM5YyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
                          alt="location icon"
                          classNameNameName=" ls-is-cached lazyloaded"
                          style={{ height: "22px" }}
                        />
                        <h1 style={{ margin: "0px" }}>
                          {siteProfiles[0].offices[0].address}
                        </h1>
                      </li>
                      <li
                        class="phone_footer"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41OCIgaGVpZ2h0PSIxOC41OCI+PHBhdGggZD0iTTkuMjkuMTVhOS4xNCA5LjE0IDAgMTA5LjE0IDkuMTRBOS4xMzkgOS4xMzkgMCAwMDkuMjkuMTV6bTAgMTYuNTExYTcuMzcxIDcuMzcxIDAgMTE3LjM3MS03LjM3MSA3LjM2OSA3LjM2OSAwIDAxLTcuMzcxIDcuMzcxem0yLjI3OC0zLjg0OEw4LjQzOSAxMC41NGEuNDQ1LjQ0NSAwIDAxLS4xODEtLjM1OFY0LjEzYS40NDQuNDQ0IDAgMDEuNDQyLS40NDJoMS4xOGEuNDQ0LjQ0NCAwIDAxLjQ0Mi40NDJ2NS4yMmwyLjQ2MiAxLjc5MWEuNDQyLjQ0MiAwIDAxLjEuNjE5bC0uNjkzLjk1NWEuNDQ1LjQ0NSAwIDAxLS42MjMuMDk5eiIgZmlsbD0iIzAxNWM5YyIgc3Ryb2tlPSIjMDE1YzljIiBzdHJva2Utd2lkdGg9Ii4zIi8+PC9zdmc+"
                          alt="phone icon"
                          classNameNameName=" ls-is-cached lazyloaded"
                          style={{ height: "22px" }}
                        />
                        <h1 style={{ margin: "0px" }}>
                          <p style={{ margin: "0px" }}>Liên hệ tới số </p>
                          {siteProfiles[0].hotline}
                        </h1>
                      </li>
                      <li
                        class="time_footer"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC41OCIgaGVpZ2h0PSIxOC41OCI+PHBhdGggZD0iTTkuMjkuMTVhOS4xNCA5LjE0IDAgMTA5LjE0IDkuMTRBOS4xMzkgOS4xMzkgMCAwMDkuMjkuMTV6bTAgMTYuNTExYTcuMzcxIDcuMzcxIDAgMTE3LjM3MS03LjM3MSA3LjM2OSA3LjM2OSAwIDAxLTcuMzcxIDcuMzcxem0yLjI3OC0zLjg0OEw4LjQzOSAxMC41NGEuNDQ1LjQ0NSAwIDAxLS4xODEtLjM1OFY0LjEzYS40NDQuNDQ0IDAgMDEuNDQyLS40NDJoMS4xOGEuNDQ0LjQ0NCAwIDAxLjQ0Mi40NDJ2NS4yMmwyLjQ2MiAxLjc5MWEuNDQyLjQ0MiAwIDAxLjEuNjE5bC0uNjkzLjk1NWEuNDQ1LjQ0NSAwIDAxLS42MjMuMDk5eiIgZmlsbD0iIzAxNWM5YyIgc3Ryb2tlPSIjMDE1YzljIiBzdHJva2Utd2lkdGg9Ii4zIi8+PC9zdmc+"
                          alt="email icon"
                          classNameNameName="bottom-mail ls-is-cached lazyloaded"
                          // style={{ marginR1ight: "5px" }}
                          style={{ height: "22px", marginRight: "5px" }}
                        />
                        <h1 style={{ margin: "0px" }}>
                          {siteProfiles[0].workTime}
                        </h1>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 col-xs-12 ">
                  <div class="footer_google-map">
                    <iframe
                      title="adfdaf"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDO6xwXdudsBWYD1asUmmLtT9Sj9XdXufA&amp;q=place_id:ChIJ09o9p16rNTER9VPVekNDfIA"
                      allowfullscreen=""
                      width="770"
                      height="326"
                      style={{ border: "0px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-footer fot_copyright a-center" />
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Footer;
