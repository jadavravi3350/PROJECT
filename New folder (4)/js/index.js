function futer00() {

    var h = ""

    var h = h + `
<div class="footer mt-5">
                    <div class="footer1 py-4">
                        <div class="row justify-content-center container-fluid">

                            <div class="col-12 col-md-6 col-lg-2 my-3"><img
                                    src="/image/image.png" height="200px">
                            </div>
                            <div class="col-12 col-md-6 col-lg-2 my-3">
                                <h4>Resources</h4>
                                <p><a href="Services.html" class="text-secondary">Services</a></p>
                                <p><a href="internship.html" class="text-secondary">Internship</a></p>
                                <p><a  href="career.html" class="text-secondary">Career</a></p>
                                <p><a  href="portfolio.html" class="text-secondary">Portfolio</a></p>
                            </div>

                            <div class="col-12 col-md-6 col-lg-2 my-3">
                                <h4>Company</h4>
                                <p><a href="about.html" class="text-secondary">About</a></p>
                                <p><a href="contact.html" class="text-secondary">Contact</a></p>
                                <p><a href="blogs.html" class="text-secondary">Blog</a></p>
                            </div>

                            <div class="col-12 col-md-6 col-lg-2 my-3">
                                <h4>Legal</h4>
                                <p><a href class="text-secondary">Privacy Policy</a></p>
                            </div>

                            <div class="col-12 col-lg-4 my-3">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Subscribe for email update"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                                <i class="fa-brands fa-facebook fs-3"></i>
                                <i class="fa-brands fa-square-instagram fs-3 mx-3"></i>
                                <i class="fa-brands fa-linkedin fs-3"></i>
                            </div>
                        </div>
                        <p class="text-center">All copyrights reserved © 2013 - infinity 3 Technologies Pvt. Ltd.</p>
                    </div>
                </div>
`

    document.getElementById("footer").innerHTML = h
}

futer00()
