import React from "react";

function TestimonailWrapper({
  userName,
  status,
  imgurl,
  testimonialHeader,
  subtitles,
}) {
  return (
    <div class="testimonail_wrapper">
      <div class="user_wrapper">
        <img src={imgurl} alt="" class="profile_pic" />
        <div class="user_data">
          <h4 class="user_name">{userName}</h4>
          <span class="status">{status}</span>
        </div>
      </div>
      <h2 class="testimonial__header">{testimonialHeader}</h2>
      <q class="subtitles">{subtitles}</q>
    </div>
  );
}
export default TestimonailWrapper;
