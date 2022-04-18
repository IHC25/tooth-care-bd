import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container py-4">
      <h2>Blogs</h2>
      <Card className="text-center py-2 my-2 rounded">
        <Card.Body>
          <Card.Title>
            Difference Between Authorization & Authentication
          </Card.Title>
          <Card.Text>
            Both Authorization & Authentication is part of security in a system.
            Authentication is a process which checks the identity of a user for
            providing access to the system. On the other hand, Authorization
            validates the user's authority to access the particular resource.
            Authentication is done before the Authorization process.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center py-2 my-2">
        <Card.Body>
          <Card.Title>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Firebase made it easy to implement user authentication system. It
            supports authentication using passwords, phone numbers, popular
            identity provider Google, Facebook, GitHub etc. Some other options
            we have to implement authentication are Okta, Auth0, Amazon Cognito,
            OneLogin etc.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="text-center py-2 my-2">
        <Card.Body>
          <Card.Title>
            What other services does firebase provide other than authentication?
          </Card.Title>
          <Card.Text>
            There are many services firebase provides excluding authentication.
            Most useful of them includes Cloud Firestore, Cloud Functions,
            Hosting, Cloud Storage, Google Analytics, Cloud Messaging. Firebase
            is a full package that can help in developing your mobile or web
            applications faster with fewer resources and more efficiency.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
