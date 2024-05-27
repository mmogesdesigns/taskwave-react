import React from 'react'
import { Link } from 'react-router-dom';
import '../HomePage.css'

const HomePage: React.FC = () => {
 return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 welcome-container d-flex flex-column justify-content-center">
          <h2>Welcome to TaskWave!</h2>
          <p>Streamline Your Workflow with TaskWave: All Your Projects, People, and Priorities in One Place. Keep your work organized and accessible, no matter where your team is based.</p>
          <button className="btn btn-primary" style={{ width: '150px' }}>
            Learn More
          </button>
        </div>
        <div className="col-md-6">
          <img src="./static/images/comp.png" alt="Drawing of computer" className="img-fluid" />
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-5" style={{ fontSize: '3.125rem', fontWeight: 700, textDecoration: 'underline' }}>
          Key Features
        </h2>
        <div className="row card-row">
          {/* card 1 */}
          <div className="col-md-4 col-sm-12">
            <div className="card text-center">
              <img src="./static/images/organization-img.png" alt="Image of organization" />
              <div className="card-body">
                <h5 style={{ textDecoration: 'underline' }}>Smart Task Organization</h5>
                <p>Effortlessly categorize, prioritize, and manage your tasks with our dynamic organizational tools. From drag-and-drop interfaces to automated categorization based on deadlines and priorities, stay on top of every project detail with ease.</p>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="col-md-4 col-sm-12">
            <div className="card text-center">
              <img src="./static/images/collab-img.png" alt="Image Here" />
              <div className="card-body">
                <h5 style={{ textDecoration: 'underline' }}>Seamless Team Collaboration</h5>
                <p>Enhance team productivity with real-time updates, shared workspaces, and direct messaging capabilities. Our platform ensures that everyone is aligned and informed, fostering collaboration whether your team is remote or in-office.</p>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="col-md-4 col-sm-12">
            <div className="card text-center">
              <img src="./static/images/analyticss-img.png" alt="Image of analytics" />
              <div className="card-body">
                <h5 style={{ textDecoration: 'underline' }}>Insightful Analytics</h5>
                <p>Gain deep insights into your projects and workflows with our comprehensive analytics dashboard. Track progress, measure productivity, and forecast project timelines to make data-driven decisions that propel your projects forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
