import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BlogDetails() {
  return (
    <div>
      <Navbar />

         {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}
      >
        <div class="container-fluid page-header-inner py-5">
          <div class="container text-center">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
             Blog Details
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Blog Details
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

         {/* <!-- Detail Start --> */}
    <div class="container py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="row">
            <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <div class="d-flex flex-column text-left mb-4">
                    <h5 class="text-primary mb-3">// Blog Detail //</h5>
                    <h1 className="mb-4">Lorem ipsum dolor sit amet</h1>
                    <div class="d-index-flex mb-2">
                        <span class="mr-3"><i class="fa fa-user text-primary"></i> Admin</span>
                        <span class="mr-3"><i class="fa fa-folder text-primary"></i> Web Design</span>
                        <span class="mr-3"><i class="fa fa-comments text-primary"></i> 15</span>
                    </div>
                </div>
                <div class="mb-5 wow fadeIn" data-wow-delay="0.3s">
                    <img class="img-thumbnail mb-4 p-3" src="assets/img/carousel-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s">Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero, eos tempor gubergren clita est consetetur dolores et dolor. Sadipscing lorem kasd labore ea sanctus sanctus, dolores invidunt et consetetur et duo. Tempor dolores accusam sit vero sit, sed labore duo vero et at, et amet et justo gubergren. Labore aliquyam voluptua dolor nonumy lorem. Sanctus sed sadipscing rebum ipsum dolor et ea no. Ipsum elitr sea erat.</p>
                    <p className="wow fadeIn" data-wow-delay="0.3s">Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt, sed duo dolor et amet no et. Ut takimata tempor kasd amet kasd ut. No et ipsum amet tempor et. Sed nonumy sed vero ut, sed aliquyam accusam clita dolores tempor est. Ea et takimata consetetur et amet sanctus. Duo no diam ipsum diam dolores, eirmod diam dolores clita sed erat magna. Dolore ut amet ea magna. Sea et dolore sit labore at amet eos. Dolor voluptua sit rebum sit ut nonumy. Dolor amet amet sit sadipscing, lorem.</p>
                    <h2 class="mb-4 wow fadeIn" data-wow-delay="0.3s">Est dolor lorem et ea</h2>
                    <img class="img-thumbnail p-3 w-50 float-left mr-4 mb-3" src="assets/img/blog-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s">Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
                    <h3 class="mb-4 wow fadeIn" data-wow-delay="0.3s">Est dolor lorem et ea</h3>
                    <img class="img-thumbnail p-3 w-50 float-right ml-4 mb-3" src="assets/img/blog-1.jpg" alt="Image" />
                    <p className="wow fadeIn" data-wow-delay="0.3s">Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos. Dolores et no stet magna et gubergren amet dolor sit, lorem dolore est vero et. Justo erat magna ipsum magna sea. Magna amet est sit sed sadipscing. At takimata dolores ut dolore takimata stet nonumy ipsum, gubergren vero ea consetetur aliquyam kasd est magna justo, dolore justo at dolore et aliquyam nonumy lorem gubergren. Amet duo invidunt kasd labore aliquyam. Vero dolores lorem elitr justo ut, accusam erat sed dolor at accusam takimata ipsum sea diam. Ipsum voluptua lorem sed amet, amet sea sit et at nonumy labore takimata, justo ipsum voluptua stet takimata. Ea lorem elitr aliquyam gubergren sit magna sanctus, sed sed dolore ipsum justo dolor et amet invidunt erat. Sadipscing sanctus stet.</p>
                </div>
                
                <div class="media bg-primary text-white mb-5 p-4 p-md-5 d-flex wow fadeIn" data-wow-delay="0.3s">
                    <img src="assets/img/user.jpg" alt="Image" class="img-thumbnail p-3 mr-4 mt-1 bg-primary" style={{width:"100px"}} />
                    <div class="media-body">
                        <h5 class="mb-3">John Doe</h5>
                        <p class="m-0">Conset elitr erat vero sanctus labore dolor ipsum et diam, tempor dolores eos dolor conset lorem ipsum, ipsum accusam ipsum sit no ut est. Guber ea ipsum erat conset magna kasd amet est magna elitr ea sit justo sed sanctus.</p>
                    </div>
                </div>

                <div class="mb-5">
                    <h4 class="mb-4">3 Comments</h4>
                    <div class="media mb-4 d-flex align-items-start">
                        <img src="assets/img/user.jpg" alt="Image" class="img-thumbnail p-2 mr-3 mt-1" style={{width:"60px"}} />
                        <div class="media-body">
                            <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                            {/* <button class="btn btn-sm btn-dark">Reply</button> */}
                            <a href="#" className="btn btn-primary py-1 px-2">Reply</a>
                        </div>
                    </div>
                    <div class="media mb-4 d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
                        <img src="assets/img/user.jpg" alt="Image" class="img-thumbnail p-2 mr-3 mt-1"
                            style={{width:"60px"}} />
                        <div class="media-body">
                            <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                            {/* <button class="btn btn-sm btn-dark">Reply</button> */}
                            <a href="#" className="btn btn-primary py-1 px-2">Reply</a>
                            <div class="media mt-4 d-flex align-items-start">
                                <img src="assets/img/user.jpg" alt="Image" class="img-thumbnail p-2 mr-3 mt-1"
                                    style={{width:"60px"}} />
                                <div class="media-body">
                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                                    {/* <button class="btn btn-sm btn-dark">Reply</button> */}
                                     <a href="#" className="btn btn-primary py-1 px-2">Reply</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{padding: "30px", background: "#f6f6f6"}} className="wow fadeIn" data-wow-delay="0.3s">
                    <h4 class="mb-4">Leave a comment</h4>
                    <form>
                        <div class="form-group">
                            <label for="name">Name *</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="website">Website</label>
                            <input type="url" class="form-control" id="website" /> 
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                        </div>
                        <div class="form-group mb-0">
                            <input type="submit" value="Leave Comment" class="btn btn-primary px-3" />
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-lg-4 mt-5 mt-lg-0 wow fadeIn" data-wow-delay="0.3s">
                <div class="mb-5">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Keyword" />
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary" style={{height:'48px',borderRadius:'0 4.8px 4.8px 0'}}><i
                                        class="fa fa-search"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mb-5 wow fadeIn" data-wow-delay="0.3s">
                    <h4 class="mb-4">Categories</h4>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web Design
                            <span class="badge badge-primary badge-pill">150</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web Development
                            <span class="badge badge-primary badge-pill">131</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Online Marketing
                            <span class="badge badge-primary badge-pill">78</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Keyword Research
                            <span class="badge badge-primary badge-pill">56</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Email Marketing
                            <span class="badge badge-primary badge-pill">98</span>
                        </li>
                    </ul>
                </div>
                <div class="mb-5">
                    <img src="assets/img/blog-1.jpg" alt="" class="img-thumbnail p-3" />
                </div>
                <div class="mb-5">
                    <h4 class="mb-4">Recent Post</h4>
                    <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                        <img class="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
                        <div class="d-flex flex-column pl-3">
                            <a class="font-weight-bold text-secondary mb-2" href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-muted"></i> Admin</small>
                                <small class="mr-3"><i class="fa fa-folder text-muted"></i> Web Design</small>
                                <small class="mr-3"><i class="fa fa-comments text-muted"></i> 15</small>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                        <img class="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
                        <div class="d-flex flex-column pl-3">
                            <a class="font-weight-bold text-secondary mb-2" href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-muted"></i> Admin</small>
                                <small class="mr-3"><i class="fa fa-folder text-muted"></i> Web Design</small>
                                <small class="mr-3"><i class="fa fa-comments text-muted"></i> 15</small>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                        <img class="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
                        <div class="d-flex flex-column pl-3">
                            <a class="font-weight-bold text-secondary mb-2" href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-muted"></i> Admin</small>
                                <small class="mr-3"><i class="fa fa-folder text-muted"></i> Web Design</small>
                                <small class="mr-3"><i class="fa fa-comments text-muted"></i> 15</small>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                        <img class="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
                        <div class="d-flex flex-column pl-3">
                            <a class="font-weight-bold text-secondary mb-2" href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-muted"></i> Admin</small>
                                <small class="mr-3"><i class="fa fa-folder text-muted"></i> Web Design</small>
                                <small class="mr-3"><i class="fa fa-comments text-muted"></i> 15</small>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <img class="img-thumbnail p-2" src="assets/img/blog-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
                        <div class="d-flex flex-column pl-3">
                            <a class="font-weight-bold text-secondary mb-2" href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            <div class="d-flex">
                                <small class="mr-3"><i class="fa fa-user text-muted"></i> Admin</small>
                                <small class="mr-3"><i class="fa fa-folder text-muted"></i> Web Design</small>
                                <small class="mr-3"><i class="fa fa-comments text-muted"></i> 15</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <img src="assets/img/blog-1.jpg" alt="" class="img-thumbnail p-3" />
                </div>
                <div class="mb-5">
                    <h4 class="mb-4">Tag Cloud</h4>
                    <div class="d-flex flex-wrap m-n1">
                        <a href="" class="btn btn-outline-primary m-1">Design</a>
                        <a href="" class="btn btn-outline-primary m-1">Development</a>
                        <a href="" class="btn btn-outline-primary m-1">Marketing</a>
                        <a href="" class="btn btn-outline-primary m-1">SEO</a>
                        <a href="" class="btn btn-outline-primary m-1">Writing</a>
                        <a href="" class="btn btn-outline-primary m-1">Consulting</a>
                    </div>
                </div>
                <div class="mb-5">
                    <img src="assets/img/blog-1.jpg" alt="" class="img-thumbnail p-3" />
                </div>
                <div>
                    <h4 class="mb-4">Plain Text</h4>
                    Aliquyam sed lorem gubergren stet diam dolor sed ut sit. Ut sanctus erat ea est invidunt aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod. Dolore no.
                </div>
            </div>
        </div>
    </div>
 
    {/* <!-- Detail End --> */}
      <Footer />
    </div>
  )
}
