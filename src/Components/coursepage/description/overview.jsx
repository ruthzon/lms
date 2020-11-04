import React, {Component} from 'react';
import '../course.css';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <>
        
              <div className="overview">
                <h5>Course Description</h5>
                <h6>
                  See-through delicate embroidered organza blue lining luxury
                  acetate-mix stretch pleat detailing. Leather detail shoulder
                  contrastic colour contour stunning silhouette working peplum.
                  Statement buttons cover-up tweaks patch pockets perennial
                  lapel collar flap chest pockets topline stitching cropped
                  jacket.
                </h6>
                <h5>Certification</h5>
                <h6>
                  Effortless comfortable full leather lining eye-catching unique
                  detail to the toe low ‘cut-away’ sides clean and sleek.
                  Polished finish elegant court shoe work duty stretchy
                  slingback strap mid kitten heel this ladylike design slingback
                  strap mid kitten heel this ladylike design.
                </h6>
                <h5>Who this course is for</h5>
                <h6>
                  Anyone interested in learning about business (only practical
                  concepts that you can use and no boring theory + we won’t
                  cover business topics that are common sense
                </h6>
              </div>

      </>
    );
  }
}

export default Overview;
