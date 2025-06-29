const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/reviews.js");
const { postReview } = require("../controller/reviews.js");


// Reviews post routes

router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));

// Reviews delete route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.distroyReview));

module.exports = router;