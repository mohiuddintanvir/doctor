import React from 'react';
import img4 from  "../../../assets/images/treatment.png"

const Exceptional = () => {
    return (
        <div>
            <div className="hero mt-20 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img4} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div className=' lg:ml-24'>
      <h1 className="text-5xl font-bold leading-10 ">Exceptional Dental<br /> Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here',
       making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Exceptional;