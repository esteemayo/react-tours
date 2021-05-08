import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
