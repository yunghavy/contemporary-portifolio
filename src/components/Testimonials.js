
import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    content: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageSrc: "https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=600", 
  },
  {
    name: "Michael Smith",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
    imageSrc: "https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&w=600", 
  },
  {
    name: "Sawaz Kelly",
    content: " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    imageSrc: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=600", 
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container mx-auto">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonial-cards-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-info">
                <img
                  src={testimonial.imageSrc}
                  alt={`Testimonial from ${testimonial.name}`}
                />
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
