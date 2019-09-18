{
  !this.props.statMode &&
    casePressed.map((currElement, index) => {
      if (this.props.imageIndex === 0) {
        if (
          (questionInput.length === 1 && questionInput[0] === "Pneumonia") ||
          questionInput.length >= 2
        ) {
          if (index >= 3 && index <= 7) {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col="blue"
                />
              </div>
            );
          } else {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col=""
                />
              </div>
            );
          }
        } else if (
          questionInput.length === 1 &&
          questionInput[0] === "Chest Pain"
        ) {
          if (index === 3 || index === 6 || index === 7) {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col="blue"
                />
              </div>
            );
          } else {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col=""
                />
              </div>
            );
          }
        } else {
          return (
            <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
              <AnnotationBubble
                caption={caseAbnormalCaption[this.props.imageIndex][index]}
                label={currElement}
                id={currElement}
                col=""
              />
            </div>
          );
        }
      } else {
        if (
          questionInput.length === 2 ||
          (questionInput.length === 1 &&
            (questionInput[0] === "Cough" ||
              questionInput[0] === "Shortness of Breath"))
        ) {
          if (index === 3 || index === 4) {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col="blue"
                />
              </div>
            );
          } else {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col=""
                />
              </div>
            );
          }
        } else if (
          questionInput.length === 1 &&
          questionInput[0] === "Cardiac"
        ) {
          if (index === 3) {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col="blue"
                />
              </div>
            );
          } else {
            return (
              <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                  col=""
                />
              </div>
            );
          }
        } else {
          return (
            <div onMouseEnter={() => this.handleClickAnnotation(currElement)}>
              <AnnotationBubble
                caption={caseAbnormalCaption[this.props.imageIndex][index]}
                label={currElement}
                id={currElement}
                col=""
              />
            </div>
          );
        }
      }
    });
}
