import React, { Component } from 'react'
import ReactDOM from "react-dom"
import './../css/home.css';
import './../css/style.css';
import Footer from "../partials/footer.js"
import CountUp from 'react-countup';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guild: {},
      user: {},
      users: 0,
      guilds: 0,
      error: false,
      succ: false,
      alertMsg: "",
      loading: false,
      auth: false,
      userStartCount: 0,
      userEndCount: 0,
      guildStartCount: 0,
      guildEndCount: 0,
      test: ""

    }
    this.render = this.render.bind(this);

  }
  componentDidMount() {
    var i = 0;
    // const { userEndCount, guildEndCount } = this.state
    setInterval(() => {
      i +=

        fetch("/api/counts")
          .then(response => response.json())
          .then(res => {
            this.setState({ userStartCount: this.state.userEndCount, guildStartCount: this.state.guildEndCount, userEndCount: res.users, guildEndCount: res.guilds, count: i })
          })
          .catch(e => this.setState({ error: true }))
    }, 6000);
  }
  scrollToElement = async () => {
    document.getElementById('public_register').scrollIntoView();
  }
  windowHandle = () => {
    window.open("https://www.google.com")
  }
  render() {
    const { userStartCount, userEndCount, guildStartCount, guildEndCount } = this.state

    return (
      <div>


        <div className="home_wrap">
          <div className="promotion">
            <div className="top">
              <h1>Egg İle Bot Fazlalığından Kurtulun, Sunucunuzu En İyisi Yapın!</h1>
            </div>
            <div className="bottom_wrap">
              <div className="bottom">
                <a className="add_bot" href="http://localhost:3001/addBot"> <i class="fab fa-discord"></i>  Sunucuna Ekle</a>
                <button className="features" onClick={this.scrollToElement}><i class="fas fa-rocket"></i>   Özellikleri Gör</button>
              </div>
            </div>
            <div className="stats_wrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#181818" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
              <div class="stats_wrapper">
                <div class="stat_blocks">
                  <div class="stat_block">
                    <h2><i class="far fa-user"></i> {<CountUp delay={2} start={userStartCount} end={userEndCount} formattingFn={number => number.toLocaleString("en-US")} />}  Kullanıcı</h2>
                  </div>
                  <div class="stat_block">
                    <h2><i class="fas fa-server"></i> {<CountUp delay={2} start={guildStartCount} end={guildEndCount} formattingFn={number => number.toLocaleString("en-US")} />}  Sunucu</h2>
                  </div>

                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#181818" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,128C960,171,1056,245,1152,261.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
          </div>
          <div className="features_wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17181B" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,144C420,107,480,85,540,74.7C600,64,660,64,720,90.7C780,117,840,171,900,176C960,181,1020,139,1080,112C1140,85,1200,75,1260,80C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>        <div className="features_wrapper">
              <h1 className="features_header" id="public_register">Public Kayıt</h1>
              <div className="left">
                <img src="/public/img/kayit_img_1.png" className="lazyload" />
              </div>
              <div className="right">
                <h3 className="exp_header">Özelleştirebilir public sunucu kayıt sistemi!</h3>
                <div className="right_content">
                  <p>
                    <strong>Egg Bot en gelişmiş public kayıt sistemine sahiptir.</strong>
                    Kayıt botlarına para vermenize gerek kalmadan neredeyse her şeyi özelleştirebilmenize imkan sağlar.
                </p>
                </div>
              </div>
            </div>
            <div class="features_wrapper">
              <h1 class="features_header" id="moderator">Moderatör</h1>
              <div class="left">
                <img src="/public/img/jail_img_2.png" className="lazyloaded" />

              </div>
              <div class="right">
                <h3 class="exp_header">Sunucuzu toksik kitleden koruyun</h3>
                <div class="right_content">
                  <p>
                    Yetkililerinize ban yetkisi vermek bazen tehlikeli olabilir.Ancak Egg Bot ile yetkili rolü
                    ayarlarsanız
                    Egg Bot belirli bir limitin üzerinden banlama yaparsa o yetkilinin yetkisini alır bu sayede
                    sunucunuz
                    korunmuş olur!
                    <br />
                    <br />
                Eğer kullanıcılarınız banlamak istemiyorsanız Egg Bot'un buna da bir çözümü var! Jail komutları
                kullanıcıların tüm rollerini alıp kendine kaydeder ve kullanıcıya cezalı rolü verir.Kullanıcyı
                jail'den
                çıkardığınız zaman kullanıcının
                rollerini geri verir.
                </p>
                </div>
              </div>
            </div>
            <div class="features_wrapper">
              <h1 class="features_header" id="moderator">Müzik</h1>
              <div class="left">
                <img src="/public/img/müzik.jpg" className="lazyload" />

              </div>
              <div class="right">
                <h3 class="exp_header">Arkadaşlarınız ile müziğin keyfini çıkarın!</h3>
                <div class="right_content">
                  <p>
                    Egg size arkadaşlarınız ile beraber kaliteli müzik dinleme imkanı sunar.
                </p>
                </div>
              </div>
            </div>

            <div class="features_wrapper">
              <h1 class="features_header" id="kayit_sistemi">Başvuru</h1>
              <div class="left">
                <img src="/public/img/recourse_img_2.png" />


              </div>
              <div class="right">
                <h3 class="exp_header">Yetkili başvuru sistem</h3>
                <div class="right_content">
                  <p>
                    Yetkili almak istiyorsunuz ancak uğraşmak istemiyor musunuz ? O halde başvuru sistemini ayarlayın!
                    Başvuru sistemini açtığınız zaman Egg Bot size bir link verir bu linki kullanıcılara verirsiniz
                    kullanıcılar formu doldurup göndere
                    tıkladığında sizin ayarladığınız kanala kullanıcının cevaplarını ve bilgilerini gösterir.

                </p>
                </div>
              </div>
            </div>



            <div class="features_wrapper">
              <h1 class="features_header" id="word_game">Kelime Oyunu</h1>
              <div class="left">
                <img src="/public/img/word-game.png" />


              </div>
              <div class="right">
                <h3 class="exp_header">TDK destekli kelime oyunu</h3>
                <div class="right_content">
                  <p>
                    Kurallar basit bir oyun kanalı ayarların size verilen harf ile başlayarak her kelimenin son harfi
                    yeni kelimenin başa harfi olucak şekilde devam ettirin!
                </p>
                </div>
              </div>
            </div>


            <div class="features_wrapper" >
              <h1 class="features_header" id="log">Log</h1>
              <div class="left">
                <img src="/public/img/log_img_1.png" />

              </div>
              <div class="right">
                <h3 class="exp_header">Sunucuda neler olup bitiyor görün!</h3>
                <div class="right_content">
                  <p>
                    Bir log kanalı ayarlayın sunucunuzda neler olup bittiğini görün!
                </p>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#17181B" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,144C420,107,480,85,540,74.7C600,64,660,64,720,90.7C780,117,840,171,900,176C960,181,1020,139,1080,112C1140,85,1200,75,1260,80C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>


          </div>
          <Footer />
        </div>

      </div>

    );
  }
}

export default Home;
