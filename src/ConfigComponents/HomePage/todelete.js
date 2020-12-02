 {/* <button onClick={() => handleChoose(1)}>
            Course Header {choose === 1 ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          <div className={choose === 1 ? 'display' : 'cover'}>
          </div>

          <button onClick={() => handleChoose(2)}>
            Additional Sections
            {choose === 2 ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          <div className={choose === 2 ? 'display' : 'cover'}>
            <div>
              Header
              <input
                type="color"
                value={props.school.colors.header}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'header'])
                }
              />
            </div>
            <div>
              Title
              <input
                type="color"
                value={props.school.colors.title}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'title'])
                }
              />
            </div>
            <div>
              Subtitle
              <input
                type="color"
                value={props.school.colors.subtitle}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'subtitle'])
                }
              />
            </div>
            <div>
              Categories
              <input
                type="color"
                value={props.school.colors.categories}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'categories'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('categories')}
                  checked={props.school.show.categories}
                />
                <span className="slider round"></span>
              </label>
              <FaPlus
                onClick={(e) =>
                  props.addNewForSection([
                    {
                      name: 'Name',
                      icon: './img_from_xd/Layer 2.svg',
                      backcolor: '#FFF',
                    },
                    'categories',
                  ])
                }
              />
            </div>
            <div>
              Get choice
              <input
                type="color"
                value={props.school.colors.getChoice}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'getChoice'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('getChoice')}
                  checked={props.school.show.getChoice}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Learning platform
              <input
                type="color"
                value={props.school.colors.learning}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'learning'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('learning')}
                  checked={props.school.show.learning}
                />
                <span className="slider round"></span>
              </label>
              <FaPlus
                onClick={(e) =>
                  props.addNewForLearning({
                    id: '00.',
                    header: 'Header',
                    text: 'Write here the text for that paragraph',
                  })
                }
              />
            </div>
            <div>
              World selection
              <input
                type="color"
                value={props.school.colors.worldSelection}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'worldSelection'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('worldSelection')}
                  checked={props.school.show.worldSelection}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Get started
              <input
                type="color"
                value={props.school.colors.CTA}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'CTA'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('CTA')}
                  checked={props.school.show.CTA}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              Testimoinal
              <input
                type="color"
                value={props.school.colors.testimoinal}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'testimoinal'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('testimoinal')}
                  checked={props.school.show.testimoinal}
                />
                <span className="slider round"></span>
              </label>
              <FaPlus
                onClick={(e) =>
                  props.addNewForSection([
                    {
                      name: 'Name',
                      image: './img_from_xd/User.png',
                      description: 'What the testimoinal has to say.',
                    },
                    'testimoinal',
                  ])
                }
              />
            </div>
            <div>
              Partners
              <input
                type="color"
                value={props.school.colors.partners}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'partners'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('partners')}
                  checked={props.school.show.partners}
                />
                <span className="slider round"></span>
              </label>
              <FaPlus
                onClick={(e) =>
                  props.addNewForSection([
                    './img_from_xd/leader-logo.png',
                    'partners',
                  ])
                }
              />
            </div>
            <div>
              Footer
              <input
                type="color"
                value={props.school.colors.footer}
                onChange={(e) =>
                  props.setColorSchoolByPart([e.target.value, 'footer'])
                }
              />
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={(e) => props.showSchoolByPart('footer')}
                  checked={props.school.show.footer}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div> */}