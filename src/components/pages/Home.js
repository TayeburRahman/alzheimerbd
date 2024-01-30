import { BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import demotion from "../../assets/images/131293776_4257245418986.jpg";
import publication from "../../assets/images/Publication-225x300.jpg";
import covid from "../../assets/images/Unite-against-COVID-19-300x200.jpg";
import research from "../../assets/images/alzheimerbd-research.jpg";
import dementia from "../../assets/images/dementia-friends.jpg";
import ishan from "../../assets/images/ishan-Mitra.png";



function Home() {

    return (
        <div>
            <section className="container">
                <div className="demotion_">
                    <h3>ডিমেনশিয়া সংক্রান্ত মৌলিক তথ্য</h3>
                </div>
                <div className="row">
                    <div className=" col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>ডিমেনশিয়া কি এবং কেন হয় ?</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>ডিমেনশিয়ার উপসর্গগুলো কি কি?</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>ডিমেনশিয়ার কোন চিকিৎসা আছে কি?</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>ডিমেনশিয়া আক্রান্ত ব্যক্তির সাথে বসবাস এবং তাদের পরিচর্যা</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>ডিমেনশিয়া সেবা সংক্রান্ত কয়েকটি ব্যবহারিক তথ্য</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>পরিচর্যায় দৈহিক ও মানসিক চাপ</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 padding_0">
                        <Link to="" className="card_question" href="#">
                            <h3>আপনার নিজের যত্ন</h3>

                            <div className="go-corner" href="#">
                                <div className="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 padding_0">

                        <Link class="card_answer"  >
                            <h3>আপনার প্রশ্নের উত্তরঃ</h3>

                            <div class="go-corner_ans"  >
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
            <div className="marquee_div bg-gray-800 mt-4">
                <marquee
                    direction="left" scrollamount="4"
                // behavior="scroll" 
                >
                    <div className="d-flex">
                        <div className="news-headline">  আলঝেইমার সোসাইটি অব বাংলাদেশ সহায়তার জন্য আপনার পাশে থাকবে।</div>

                        <div className="call_div"> <BiRightArrowCircle className="arrow_icon" /> Call Us Now <span className="text-bold ms-2"> +8801720498197 / +8801906246621 </span> </div>
                    </div>
                </marquee>

            </div>
            <section className="container mb-5">
                <div className="row">
                    <div className=" col-lg-7 padding_0">
                        <article className="cards">
                            <img className="card_image" src={covid} />
                            <div className="card__body">
                                <h2 className="card__title"><Link to="#">Unite against COVID -19</Link></h2>
                            </div>
                        </article>
                    </div>
                    <div className=" col-lg-5 padding_0">
                        <div>
                            <article className="cards">
                                <img className="card_image" src={research} />
                                <div className="card__body">
                                    <h2 className="card__title"><Link to="#">Research</Link></h2>
                                </div>
                            </article>
                        </div>
                        <div>
                            <article className="cards">
                                <Link to="#">  <img className="card_image" src={dementia} /> </Link>
                                <div className="card__body">
                                    {/* <h2 className="card__title"><Link to="#">Dementia Friends</Link></h2> */}
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className=" col-lg-2 padding_0">
                        <article className="cards">
                            <img className="card_image" src={publication} />
                            <div className="card__body">
                                <h2 className="  title_sm"><Link to="#">Publication</Link></h2>
                            </div>
                        </article>
                    </div>
                    <div className=" col-lg-2 padding_0">
                        <article className="cards">
                            <img className="card_image" src={demotion} />
                            <div className="card__body">
                                <h2 className="  title_sm"><Link to="#">ডিমেনশিয়া আক্রান্তদের যত্ন</Link></h2>
                            </div>
                        </article>
                    </div>

                    <div className=" col-lg-4 padding_0 donate_div">
                        <h3 className="support">We Need Your Support Today!</h3>
                        <button className="donate">DONATE NOW</button>
                    </div>
                    <div className=" col-lg-4 padding_0 donate_div">
                        <img className="ishan_image mt-5" src={ishan} />
                    </div>
                </div>
            </section>
            <section className="video_and_blog"> 
             
               <div className="container videos">
               <h1 className="video_gallery">Video Gallery</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-lg-4 mb-4">
                        <div className="embed-responsive embed-responsive-16by9">
                           
                            <iframe className="embed-responsive-item w-full videos_frame" src="https://www.youtube.com/embed/ELBl85EoxuU" title="ডিমেনশিয়া রোগের আগাম লক্ষণ (Early signs of dementia)" allowfullscreen></iframe>
                            <h5 className="video_headline">ডিমেনশিয়া জানুন ,আলঝেইমারস্ চিনুন !</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4  mb-4">
                        <div className="embed-responsive embed-responsive-16by9">
                           
                            <iframe className="embed-responsive-item w-full videos_frame" src="https://www.youtube.com/embed/hQoKMQ6amHw" title="Shamima Akter&#39;s carer story" allowfullscreen></iframe>
                            <h5 className="video_headline">Carer Story</h5>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 mb-4">
                        <div className="embed-responsive embed-responsive-16by9">
                            
                            <iframe className="embed-responsive-item w-full videos_frame"  src="https://www.youtube.com/embed/PTlF7p-5XYE" title="ডিমেনশিয়া এক অজানা পথ&quot; (Dementia is an unknown path)" allowfullscreen></iframe>
                            <h5 className="video_headline">তথ্যচিত্র (Documentary )</h5>
                        </div>
                    </div>

                   
                </div>
               </div>
            </section>
        </div>

    );
}

export default Home;
