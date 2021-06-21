import React from 'react';

const TestData = ({testData}) => {
    return (
      
    // <div>
    //     {testData.quote}
    // </div>
            <div className="col-md-3 justify-content-evenly shadow-lg p-3 mb-5 bg-body rounded">
                    <div>
                        <h6>{testData.quote}</h6>
                        <div className="d-flex mt-5 justify-content-center">
                            <img style={{height:'50px'}} src={testData.img} alt="" />
                            <div className="  ">
                                <h3 className="text-primary"> {testData.name}</h3>
                                <p>{testData.from}</p>
                            </div>
                        </div>

                    </div>

              
            </div>
    )
};

export default TestData;