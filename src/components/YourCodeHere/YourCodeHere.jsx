import React, { useState } from "react";
import { UserContainer } from "../User/UserContainer.jsx";
import { UIDropdown } from "../UI/UIDropdown.jsx";
import "./YourCodeHere.scss";

export function YourCodeHere() {
  const [modal, setModal] = useState(false);
  return (
    <UserContainer>
      <div className="ProgramCreation">
        <div className="Global__app-content-max-width">
          <div className="ProgramCreation__wrap">
            <div className="ProgramCreation__header">
              <h1 className="ProgramCreation__title">New program creation</h1>
              <div className="ProgramCreation__actions d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <button className="UIButton UIButton--sm UIButton--green-outline ProgramCreation__actions-btn-back"></button>
                  <div className="ProgramCreation__actions-label">
                    Currencyzen
                  </div>
                </div>
                <div className="ProgramCreation__actions-buttons">
                  <button className="UIButton UIButton--green-outline">
                    Save as draft
                  </button>
                  <button className="UIButton UIButton--green" disabled>
                    Launch program
                  </button>
                </div>
              </div>
            </div>
            <div className="ProgramCreation__form">
              <h2 className="ProgramCreation__subtitle">general information</h2>
              <div className="ProgramCreation__form-row row">
                <div className="col-6">
                  <label className="invalid w-100">
                    <span className="ProgramCreation__label d-block required">
                      Program name
                    </span>
                    <input
                      required
                      className="UIInput w-100"
                      type="text"
                      placeholder="Enter program name"
                      defaultValue={"$05423#455:_;"}
                    />
                    <span className="ProgramCreation__error">
                      Use alphanumeric field with allowed special characters,
                      spaces and upper and lowercase letters
                    </span>
                  </label>
                </div>
                <div className="col-6">
                  <label className="File-upload">
                    <span className="ProgramCreation__label d-block">
                      Program logo
                    </span>
                    <span className="Placeholder Placeholder--empty Placeholder--upload">
                      Upload your program logo
                    </span>
                    <input
                      className="UIInput w-100 File-upload__input"
                      type="file"
                    />
                  </label>
                </div>
              </div>
              <div className="ProgramCreation__form-row row">
                <div className="col-6">
                  <label className="w-100">
                    <span className="ProgramCreation__label d-block">
                      Programming language
                    </span>
                    <UIDropdown
                      className="ProgramCreation__form-dropdown"
                      title="Select programming language"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </label>
                </div>
                <div className="col-6">
                  <label className="w-100">
                    <span className="ProgramCreation__label d-block required">
                      Chains
                    </span>
                    <UIDropdown
                      className="ProgramCreation__form-dropdown"
                      title="Select chain"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </label>
                </div>
              </div>
              <div className="ProgramCreation__form-row row">
                <div className="col-6">
                  <label className="w-100">
                    <span className="ProgramCreation__label d-block">
                      Product types
                    </span>
                    <UIDropdown
                      className="ProgramCreation__form-dropdown"
                      title="Select product type"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </label>
                </div>
                <div className="col-6">
                  <label className="w-100">
                    <span className="ProgramCreation__label d-block required">
                      Project categories
                    </span>
                    <UIDropdown
                      className="ProgramCreation__form-dropdown"
                      title="Select project category"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </label>
                </div>
              </div>
              <div className="ProgramCreation__form-row row">
                <div className="col-12">
                  <label className="w-100">
                    <div className="d-flex justify-content-between w-100">
                      <span className="ProgramCreation__label d-block required">
                        Program description
                      </span>
                      <span className="ProgramCreation__counter">250</span>
                    </div>
                    <textarea
                      className="UIInput ProgramCreation__textarea w-100"
                      required
                      placeholder="Enter program description"
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>
            <div className="ProgramCreation__form ProgramCreation__details-form">
              <h2 className="ProgramCreation__subtitle">Program details</h2>
              <div className="ProgramCreation__tabs w-100 d-flex">
                {/* TAB1 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--left d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">
                    Websites and Applications
                  </div>
                  <div className="ProgramCreation__tab-close"></div>
                </div>
                {/* TAB2 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--active d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">
                    Blockchain/DLT
                  </div>
                  <div className="ProgramCreation__tab-close"></div>
                  <div className="DropdownGroup position-absolute w-100">
                    <div className="DropdownGroup__selected DropdownGroup__placeholder d-flex align-items-center">
                      Select asset type
                    </div>
                    <ul className="DropdownGroup__list w-100">
                      <li className="DropdownGroup__item">Smart Contracts</li>
                      <li className="DropdownGroup__item">Blockchain/DLT</li>
                      <li className="DropdownGroup__item DropdownGroup__item--category">
                        Websites and Applications
                      </li>
                      <li className="DropdownGroup__item">Circuit</li>
                    </ul>
                  </div>
                </div>
                {/* TAB5 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--right d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">Unactive</div>
                  <div className="ProgramCreation__tab-close"></div>
                </div>
                {/* TAB6 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--right ProgramCreation__tab--invalid d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">Invalid</div>
                  <div className="ProgramCreation__tab-close"></div>
                  <div className="DropdownGroup w-100 position-relative d-none">
                    <div className="DropdownGroup__selected DropdownGroup__selected--default d-flex align-items-center">
                      Select asset type
                    </div>
                    <ul className="DropdownGroup__list w-100">
                      <li className="DropdownGroup__item">Smart Contracts</li>
                      <li className="DropdownGroup__item">Blockchain/DLT</li>
                      <li className="DropdownGroup__item DropdownGroup__item--category">
                        Websites and Applications
                      </li>
                      <li className="DropdownGroup__item">Circuit</li>
                    </ul>
                  </div>
                </div>
                {/* TAB ADD NEW BTN */}
                <div className="ProgramCreation__tab ProgramCreation__tab--add-new d-flex align-items-center flex-grow-1">
                  <button className="UIButton UIButton--green-outline UIButton--sm d-flex align-items-center">
                    <span>+</span>Add asset type
                  </button>
                </div>
              </div>
              <div className="ProgramCreation__details-form-body">
                <div className=".ProgramCreation__details-form-item">
                  <div className="ProgramCreation__details-form-columns ProgramCreation__details-form-columns--header">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <div className="d-flex align-items-center gap-2">
                        <span className="ProgramCreation__label required mb-0">
                          Payout type
                        </span>
                        <span className="Tooltip">
                          <div className="Tooltip__icon"></div>
                          <div className="Tooltip__body">
                            {`Once checked payout’s maximum value and description become mandatory. At least one payout
                          type’s maximum has to be $1000 or bigger.`}
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max">
                      <span className="ProgramCreation__label mb-0">
                        Payout maximum
                      </span>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <div className="d-flex align-align-items-center gap-2">
                        <span className="ProgramCreation__label required mb-0">
                          Severity description
                        </span>
                        <span className="Tooltip">
                          <div className="Tooltip__icon"></div>
                          <div className="Tooltip__body">
                            You have to input at least one payout type’s
                            severity description.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <label className="Checkbox">
                        <input
                          type="checkbox"
                          className="Checkbox__input"
                          defaultChecked
                        />
                        <span className="Checkbox__label">Information</span>
                      </label>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max ProgramCreation__details-form-column--currency active">
                      <input
                        className="UIInput UIInput--price w-100"
                        defaultValue={1000}
                        type="number"
                        placeholder="100"
                      />
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter severity description"
                        defaultValue={"Lorem ipsum dolor sit amet."}
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <label className="Checkbox">
                        <input type="checkbox" className="Checkbox__input" />
                        <span className="Checkbox__label">Low</span>
                      </label>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max ProgramCreation__details-form-column--currency">
                      <input
                        className="UIInput UIInput--price w-100"
                        type="number"
                        placeholder="100"
                      />
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter severity description"
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <label className="Checkbox">
                        <input type="checkbox" className="Checkbox__input" />
                        <span className="Checkbox__label">Medium</span>
                      </label>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max ProgramCreation__details-form-column--currency">
                      <input
                        className="UIInput UIInput--price w-100"
                        type="number"
                        placeholder="100"
                      />
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter severity description"
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <label className="Checkbox">
                        <input type="checkbox" className="Checkbox__input" />
                        <span className="Checkbox__label">High</span>
                      </label>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max ProgramCreation__details-form-column--currency">
                      <input
                        className="UIInput UIInput--price w-100"
                        type="number"
                        placeholder="100"
                      />
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter severity description"
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <label className="Checkbox">
                        <input type="checkbox" className="Checkbox__input" />
                        <span className="Checkbox__label">Critical</span>
                      </label>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--max ProgramCreation__details-form-column--currency">
                      <input
                        className="UIInput UIInput--price w-100"
                        type="number"
                        placeholder="100"
                      />
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--description">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter severity description"
                      />
                    </div>
                  </div>
                </div>
                <div className=".ProgramCreation__details-form-item">
                  <div className="ProgramCreation__details-form-columns ProgramCreation__details-form-columns--header">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <span className="ProgramCreation__label required">
                        Program assets
                      </span>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <span className="ProgramCreation__label">
                        Asset description
                      </span>
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <div className="position-relative">
                        <span className="Placeholder Placeholder--filled Placeholder--cross">
                          {`https://google.com/bitcoin.png`}
                        </span>
                        <input className="UIInput w-100" type="text" />
                      </div>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter asset description"
                        defaultValue={"Bitcoin logo"}
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column  ProgramCreation__details-form-column--asset invalid">
                      <div className="position-relative">
                        <span className="Placeholder Placeholder--filled">
                          {`random.xyz`}
                        </span>
                        <span className="ProgramCreation__error">
                          Wrong asset
                        </span>
                        <input className="UIInput w-100" type="text" />
                      </div>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter asset description"
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-columns">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset ">
                      <div className="position-relative">
                        <span className="Placeholder Placeholder--empty Placeholder--link">
                          {`Enter asset URL`}
                        </span>
                        <input className="UIInput w-100" type="text" />
                      </div>
                    </div>
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="Enter asset description"
                      />
                    </div>
                  </div>
                  <div className="ProgramCreation__details-form-add-url">
                    <span>+</span>Add another URL
                  </div>
                </div>
                <div className=".ProgramCreation__details-form-item">
                  <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--editor">
                    <div className="d-flex justify-content-between align-items-start">
                      <span className="ProgramCreation__label">
                        Known exceptions (out of scope)
                      </span>
                      <span className="ProgramCreation__counter">2500</span>
                    </div>
                    <div className="ProgramCreation__editor Editor">
                      <div className="Editor__controls d-flex">
                        <div className="Editor__btn Editor__btn--bold"></div>
                        <div className="Editor__btn Editor__btn--h1"></div>
                        <div className="Editor__btn Editor__btn--h2"></div>
                        <div className="Editor__btn Editor__btn--line"></div>
                        <div className="Editor__btn Editor__btn--ul"></div>
                        <div className="Editor__btn Editor__btn--ol"></div>
                        <div className="Editor__btn Editor__btn--link"></div>
                      </div>
                      <textarea
                        className="UIInput ProgramCreation__textarea ProgramCreation__textarea--lg w-100"
                        required
                        placeholder="Enter exceptions out of scope"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProgramCreation__form ProgramCreation__details-area">
              <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--editor">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="ProgramCreation__label required">
                    Program details
                  </span>
                  <span className="ProgramCreation__counter">4000</span>
                </div>
                <div className="ProgramCreation__editor Editor">
                  <div className="Editor__controls d-flex">
                    <div className="Editor__btn Editor__btn--bold"></div>
                    <div className="Editor__btn Editor__btn--h1"></div>
                    <div className="Editor__btn Editor__btn--h2"></div>
                    <div className="Editor__btn Editor__btn--line"></div>
                    <div className="Editor__btn Editor__btn--ul"></div>
                    <div className="Editor__btn Editor__btn--ol"></div>
                    <div className="Editor__btn Editor__btn--link"></div>
                  </div>
                  <textarea
                    className="UIInput ProgramCreation__textarea ProgramCreation__textarea--lg w-100"
                    required
                    placeholder="Enter program details."
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, sint, vero, quam asperiores deleniti voluptatem ab
                    suscipit aliquid aliquam recusandae ratione id dolorem quod
                    voluptate provident saepe! Nisi nemo quibusdam corrupti rem
                    aperiam ipsum! Architecto aut vero praesentium deserunt et.
                    Autem enim modi rerum necessitatibus aliquam sapiente
                    repellendus magni laboriosam esse ea harum voluptate ex
                    nobis, eos dignissimos facere labore quo voluptatibus
                    libero, consequatur temporibus. Nostrum incidunt expedita
                    pariatur, reprehenderit natus sapiente error neque tempore,
                    nihil fugiat voluptas asperiores, ipsam vero consectetur
                    reiciendis officiis harum laboriosam! Illo eum voluptates
                    blanditiis distinctio pariatur repellat natus, voluptas
                    reprehenderit. Possimus debitis vitae, eaque minus magnam
                    placeat sunt. Non sunt eveniet, minima natus neque quas
                    corrupti? Totam quam sint obcaecati odio dolore maxime
                    temporibus sed atque laudantium, saepe nemo accusamus neque
                    quos. Provident magni, reprehenderit maiores a quia laborum.
                    Tempora tempore maiores aliquam fugiat recusandae soluta.
                    Voluptatibus aut nam doloribus voluptate repudiandae harum
                    ad delectus, laudantium possimus optio! Enim dolorum,
                    voluptates sit aut cum incidunt debitis est dicta!
                    Recusandae sunt ipsam illo adipisci, tempore cum hic fuga
                    error maiores, eum officiis corrupti id a. Aliquam, vero
                    commodi praesentium dolorum sunt iure magnam eaque
                    voluptatibus porro accusantium eos sed placeat reprehenderit
                    incidunt deserunt nihil consectetur accusamus voluptate. Id
                    aliquam odio perferendis laborum doloribus dolore aut
                    tempore quisquam omnis earum? Tempore beatae ut, dolore fuga
                    aspernatur delectus repudiandae impedit eveniet neque enim
                    maxime veniam obcaecati modi excepturi quod perferendis.
                    Debitis, ipsam expedita. Distinctio repellendus eveniet
                    dolorum natus quidem expedita? Nam commodi laborum dolores
                    eveniet assumenda neque accusantium quaerat dignissimos
                    corrupti nisi, voluptas officiis, sed ipsam doloremque
                    incidunt quisquam rerum praesentium obcaecati qui.
                    Temporibus, sed. Distinctio alias deserunt ducimus maxime
                    accusantium veritatis, a similique. Numquam nam nesciunt
                    autem quibusdam. Dolor at placeat perspiciatis quae quos
                    vitae voluptate atque quam maxime. Laudantium voluptatibus
                    illo, necessitatibus et reprehenderit dicta nulla dolor in
                    deleniti eius, molestiae aut illum unde consectetur quas
                    voluptates? Obcaecati officiis distinctio rem consequatur
                    accusantium sunt, animi adipisci error esse sint sapiente
                    reprehenderit quae suscipit delectus dolorum earum labore.
                    Cupiditate aperiam facere magni est expedita distinctio
                    nemo, harum illo tempora suscipit id deleniti itaque quidem
                    nobis quaerat aspernatur dolorem ipsa maiores incidunt amet
                    iste quasi pariatur quod! Consequuntur, ab architecto ut
                    eligendi, nam dolorum facere ea unde voluptatem accusantium
                    amet dignissimos sapiente vel vero! Eum quis quam
                    accusantium provident et rerum aperiam architecto ab
                    reiciendis voluptas ad numquam magni neque alias sint quod
                    molestiae, molestias expedita odio vel hic ipsam ea?
                    Molestias quas est, laudantium cum in reprehenderit? Natus,
                    magnam cupiditate ipsum libero quasi explicabo similique
                    voluptates laboriosam ex excepturi et nesciunt iste odio
                    optio? Minima autem maxime nostrum saepe amet dicta
                    doloribus laboriosam delectus, minus vero animi cum culpa
                    corrupti reiciendis in quasi libero soluta unde molestias?
                    Totam ab ratione sequi ex omnis iste rerum, delectus eos
                    aspernatur vel tempore officia? Omnis minima mollitia
                    debitis facere nulla iste corporis tempora fuga laborum
                    doloribus reiciendis quas voluptas ratione, reprehenderit
                    repellat nisi, veritatis amet ea sit. Obcaecati quidem
                    magnam molestiae architecto quod quos est vero aperiam
                    quaerat veritatis! Animi nihil saepe doloribus impedit alias
                    voluptatum. Quo maxime, dolores sapiente ducimus magnam
                    impedit expedita autem! Quasi veniam cum aut rerum, harum
                    natus at repudiandae impedit perspiciatis fugiat officiis
                    magni asperiores? Consectetur expedita unde iusto reiciendis
                    maxime, quisquam perspiciatis praesentium dolorem minus
                    tempora magni, nisi modi. Ratione sint itaque, laudantium
                    alias aut at, perferendis aliquam aliquid aperiam odit quod
                    eum minus obcaecati est expedita corrupti magni odio enim
                    eos? Molestias dolorem corporis, nemo consequuntur minima
                    quam quidem delectus. Vel quibusdam commodi soluta debitis
                    accusamus facere dicta quisquam. Error odio sequi sit
                    accusantium magnam illo eaque. Aliquam voluptates numquam
                    fugiat ipsam accusamus, ducimus quis assumenda cumque.
                    Consequatur placeat dicta, pariatur nostrum molestiae ex
                    quaerat! Aut laborum magnam sapiente animi ab fuga
                    perferendis illum quod beatae nulla repellat delectus, esse
                    blanditiis aperiam repudiandae quas ex nemo architecto
                    deserunt? Modi aspernatur ducimus, ad quisquam laborum
                    rerum, aliquam veniam in assumenda soluta architecto
                    voluptatem. Amet soluta assumenda veniam magni, illo itaque
                    labore explicabo unde, numquam nam voluptatem optio, culpa
                    officia aperiam repudiandae in iure! Necessitatibus quo ad
                    corporis culpa laudantium rem ipsum ratione cum. Fugiat
                    aspernatur aut nesciunt explicabo voluptate iste dolorem sit
                    dicta cum tempora alias fuga, ducimus ad asperiores labore
                    laboriosam, voluptatum ab qui repudiandae iusto amet ea!
                    Praesentium natus optio veniam accusamus minus amet a, fuga
                    molestias quis harum at laboriosam eveniet vel similique
                    quia. Ex, id. Reiciendis impedit, exercitationem vitae,
                    libero accusamus quidem blanditiis sed minus temporibus
                    doloremque corporis recusandae ad atque nisi magnam eaque
                    nihil, dolore voluptatibus quae. Deserunt, expedita
                    repudiandae provident recusandae impedit, amet neque numquam
                    ratione sapiente alias debitis dolore, odio aliquid. Aliquid
                    placeat culpa pariatur libero eligendi quibusdam, veritatis
                    dolore accusamus eaque veniam ea et reiciendis? Praesentium
                    laudantium nesciunt debitis quia ut? Provident doloremque
                    reiciendis eligendi quo consequatur fugiat hic dolor eveniet
                    quia assumenda sit aspernatur delectus nobis dicta molestias
                    corrupti at, quae ex unde? Quam voluptates inventore cumque
                    aspernatur omnis quo alias earum voluptas? Molestiae ut
                    placeat quod deserunt nulla! Commodi, corrupti ipsum. Dicta
                    corrupti nisi laborum ratione perspiciatis esse consequuntur
                    quo ipsam quod inventore iusto veritatis suscipit
                    necessitatibus nam tempore quisquam reprehenderit dolorum
                    aliquid, impedit qui rerum error ab quas. Odit amet
                    voluptatibus quo suscipit totam, cumque, corporis dolore
                    accusantium at ea delectus velit ducimus unde cum harum
                    praesentium reiciendis excepturi enim veniam itaque ullam.
                    Asperiores labore harum at ab sunt iste, officiis expedita
                    quas quibusdam rerum a beatae sed corrupti. Repellat
                    veritatis illo officia velit facere, libero expedita
                    doloribus magni corporis harum aliquid eaque fugit at nihil
                    debitis necessitatibus delectus deleniti ab natus inventore
                    pariatur dolore vitae voluptatem soluta. Adipisci ab hic a
                    eius ullam sunt, officia dolorem impedit temporibus quaerat
                    fuga quod necessitatibus magnam unde eos possimus ex maxime
                    beatae vitae exercitationem saepe molestiae? Dolorem veniam
                    aliquam et numquam, fugiat repellendus maiores nostrum autem
                    qui consectetur optio. Quas amet eius vel veritatis quos ab
                    nemo at, fugit corporis nihil magnam beatae maxime facere
                    dolore iste rerum possimus culpa deserunt illum quam ut.
                    Pariatur nulla quidem dolore quos quod tenetur ratione harum
                    repellat.
                  </textarea>
                </div>
              </div>
            </div>
            <div className="ProgramCreation__form ProgramCreation__confirugation-form">
              <h2 className="ProgramCreation__subtitle">
                Program configuration
              </h2>
              <fieldset>
                <span className="ProgramCreation__label d-block ">
                  KYC-required
                </span>
                <div className="d-flex ProgramCreation__form-row ProgramCreation__form-radios ">
                  <label className="Radio">
                    <input
                      value={0}
                      name="kyc"
                      type="radio"
                      className="Radio__input"
                      defaultChecked
                    />
                    <span className="Radio__label">No</span>
                  </label>
                  <label className="Radio">
                    <input
                      name="kyc"
                      value={1}
                      type="radio"
                      className="Radio__input"
                    />
                    <span className="Radio__label">Yes</span>
                  </label>
                </div>
              </fieldset>
              <div className="ProgramCreation__form-row row">
                <div className="col-6">
                  <label className="w-100 position-relative">
                    <span className="ProgramCreation__label d-block">
                      Launch date
                    </span>
                    <span className="Placeholder Placeholder--filled Placeholder--calendar">
                      {`24/07/2023   18:00:00`}
                    </span>
                    <div className="ProgramCreation__date UIInput w-100" />
                    <div className="TimePicker">
                      <div className="d-flex align-items-center justify-content-between h-100 px-4">
                        <div className="TimePicker__col position-relative">
                          <span className="TimePicker__day">Today</span>
                          <div className="Calendar">
                            <div className="Calendar__controls d-flex align-items-center justify-content-between">
                              <div className="Calendar__control Calendar__control--prev"></div>
                              <div className="Calendar__month-name flex-grow-1 text-center">
                                Aug 2023
                              </div>
                              <div className="Calendar__control Calendar__control--next"></div>
                            </div>
                            <div className="Calendar__body text-center">
                              <div className="Calendar__head">Mon</div>
                              <div className="Calendar__head">Tue</div>
                              <div className="Calendar__head">Wed</div>
                              <div className="Calendar__head">Thu</div>
                              <div className="Calendar__head">Fri</div>
                              <div className="Calendar__head">Sat</div>
                              <div className="Calendar__head">Sun</div>
                              <div className="Calendar__dif-month">26</div>
                              <div className="Calendar__dif-month">27</div>
                              <div className="Calendar__dif-month">28</div>
                              <div className="Calendar__dif-month">29</div>
                              <div className="Calendar__dif-month">30</div>
                              <div className="Calendar__dif-month">31</div>
                              <div>1</div>
                              <div>2</div>
                              <div>3</div>
                              <div>4</div>
                              <div>5</div>
                              <div>6</div>
                              <div>7</div>
                              <div>8</div>
                              <div>9</div>
                              <div>10</div>
                              <div>11</div>
                              <div>12</div>
                              <div>13</div>
                              <div>14</div>
                              <div className="Calendar__selected">15</div>
                              <div>16</div>
                              <div>17</div>
                              <div>18</div>
                              <div>19</div>
                              <div>20</div>
                              <div>21</div>
                              <div>22</div>
                              <div>23</div>
                              <div>24</div>
                              <div>25</div>
                              <div>26</div>
                              <div>27</div>
                              <div>28</div>
                              <div>29</div>
                              <div>30</div>
                              <div>31</div>
                              <div className="Calendar__dif-month">1</div>
                              <div className="Calendar__dif-month">2</div>
                              <div className="Calendar__dif-month">3</div>
                              <div className="Calendar__dif-month">4</div>
                              <div className="Calendar__dif-month">5</div>
                            </div>
                          </div>
                        </div>
                        <div className="col flex-shrink-1 text-center">at</div>
                        <div className="TimePicker__col d-flex justify-content-between">
                          <span className="TimePicker__time TimePicker__time--selected">
                            00
                          </span>
                          :<span className="TimePicker__time">00</span>:
                          <span className="TimePicker__time">00</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="col-6">
                  <label className="w-100 position-relative">
                    <span className="ProgramCreation__label d-block required">
                      Expiration date
                    </span>
                    <span className="Placeholder Placeholder--empty Placeholder--calendar">
                      {`dd/mm/yyyy`}
                    </span>
                    <div className="ProgramCreation__date UIInput w-100" />
                  </label>
                </div>
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2 ProgramCreation__always-active">
                    <label className="Checkbox">
                      <input type="checkbox" className="Checkbox__input" />
                      <span className="Checkbox__label">Always active</span>
                    </label>
                    <span className="Tooltip">
                      <div className="Tooltip__icon"></div>
                      <div className="Tooltip__body">
                        {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, natus. Voluptatibus sed iure quia reprehenderit?`}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ProgramCreation__actions d-flex align-items-center justify-content-end">
              <div className="ProgramCreation__actions-buttons">
                <button className="UIButton UIButton--green-outline">
                  Save as draft
                </button>
                <button className="UIButton UIButton--green">
                  Launch program
                </button>
              </div>
            </div>
            <button
              className="UIButton UIButton--green my-5"
              onClick={() => setModal(true)}
            >
              Open Modal
            </button>
          </div>
        </div>
        {modal && (
          <div className="Modal">
            <div
              className="Modal__overlay"
              onClick={() => setModal(false)}
            ></div>
            <div className="Modal__body d-flex flex-column">
              <div
                className="Modal__close"
                onClick={() => setModal(false)}
              ></div>
              <div className="Modal__text flex-grow-1">
                You are about to launch this program. Are you sure?
              </div>
              <div className="row g-5">
                <div className="col-6">
                  <button
                    className="UIButton UIButton--green-outline w-100"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6">
                  <button className="UIButton UIButton--green w-100">
                    Launch program
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserContainer>
  );
}
