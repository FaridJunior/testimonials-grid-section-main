import React from "react";
import TestimonailWrapper from "./TestimonailWrapper";
import { testimonailsData } from "../data";
function TestimonialsSection() {
  console.log(testimonailsData);
  return (
    <section class="testimonails">
      <div class="container">
        <div class="testimonails_wrapper">
          {testimonailsData.map((testimonail) => (
            <TestimonailWrapper {...testimonail} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
