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
                </div>
                {/* TAB3 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--right ProgramCreation__tab--invalid d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">Random text</div>
                  <div className="ProgramCreation__tab-close"></div>
                </div>
                {/* TAB4 */}
                <div className="ProgramCreation__tab ProgramCreation__tab--right ProgramCreation__tab--invalid d-flex align-items-center justify-content-between">
                  <div className="ProgramCreation__tab-label">Random text</div>
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
                {/* TAB BTN */}
                <div className="ProgramCreation__tab ProgramCreation__tab--add-new d-flex align-items-center flex-grow-1">
                  <button className="UIButton UIButton--green-outline UIButton--sm d-flex align-items-center">
                    <span>+</span>Add asset type
                  </button>
                </div>
              </div>
              <div className="ProgramCreation__details-form-body">
                <div className="Product-details-form__item">
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
                <div className="Product-details-form__item">
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
                <div className="Product-details-form__item">
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
                  ></textarea>
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
                      <div className="row align-items-center justify-content-between">
                        <div className="TimePicker__col position-relative">
                          <span>Today</span>
                          <div className="Calendar">
                            <div className="Calendar__header d-flex align-items-center justify-content-between">
                              <div className="Calendar__control Calendar__control--prev"></div>
                              <div className="Calendar__month-name flex-grow-1 text-center">
                                Aug 2023
                              </div>
                              <div className="Calendar__control Calendar__control--next"></div>
                            </div>
                            <table className="Calendar__body text-center">
                              <thead>
                                <tr>
                                  <td>Mon</td>
                                  <td>Tue</td>
                                  <td>Wed</td>
                                  <td>Thu</td>
                                  <td>Fri</td>
                                  <td>Sat</td>
                                  <td>Sun</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="Calendar__dif-month">26</td>
                                  <td className="Calendar__dif-month">27</td>
                                  <td className="Calendar__dif-month">28</td>
                                  <td className="Calendar__dif-month">29</td>
                                  <td className="Calendar__dif-month">30</td>
                                  <td className="Calendar__dif-month">31</td>
                                  <td>1</td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>3</td>
                                  <td>4</td>
                                  <td>5</td>
                                  <td>6</td>
                                  <td>7</td>
                                  <td>8</td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>10</td>
                                  <td>11</td>
                                  <td>12</td>
                                  <td>13</td>
                                  <td>14</td>
                                  <td className="Calendar__selected">15</td>
                                </tr>
                                <tr>
                                  <td>16</td>
                                  <td>17</td>
                                  <td>18</td>
                                  <td>19</td>
                                  <td>20</td>
                                  <td>21</td>
                                  <td>22</td>
                                </tr>
                                <tr>
                                  <td>23</td>
                                  <td>24</td>
                                  <td>25</td>
                                  <td>26</td>
                                  <td>27</td>
                                  <td>28</td>
                                  <td>29</td>
                                </tr>
                                <tr>
                                  <td>30</td>
                                  <td>31</td>
                                  <td className="Calendar__dif-month">1</td>
                                  <td className="Calendar__dif-month">2</td>
                                  <td className="Calendar__dif-month">3</td>
                                  <td className="Calendar__dif-month">4</td>
                                  <td className="Calendar__dif-month">5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col flex-shrink-1 text-center">at</div>
                        <div className="TimePicker__col">
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
