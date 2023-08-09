import React from "react";
import { Link } from "react-router-dom";
import { UserContainer } from "../User/UserContainer.jsx";
import { UIDropdown } from "../UI/UIDropdown.jsx";
import "./YourCodeHere.scss";

export function YourCodeHere() {
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
            <form className="ProgramCreation__form" onSubmit={() => {}}>
              <h2 className="ProgramCreation__subtitle">general information</h2>
              <div className="ProgramCreation__form-row row">
                <div className="col-6">
                  <label className="ProgramCreation__required ProgramCreation__item--invalid w-100">
                    <span className="ProgramCreation__label d-block">
                      Program name
                    </span>
                    <input
                      required
                      className="UIInput w-100"
                      type="text"
                      placeholder="Enter program name"
                    />
                    <span className="ProgramCreation__error">
                      Use alphanumeric field with allowed special characters,
                      spaces and upper and lowercase letters
                    </span>
                  </label>
                </div>
                <div className="col-6">
                  <label className="File-upload">
                    <span className="File-upload__text d-block">
                      Program logo
                    </span>
                    <span className="File-upload__placeholder File-upload__placeholder--empty">
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
                  <label className="ProgramCreation__required w-100">
                    <span className="ProgramCreation__label d-block">
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
                  <label className="ProgramCreation__required w-100">
                    <span className="ProgramCreation__label d-block">
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
                  <label className="ProgramCreation__required w-100">
                    <div className="d-flex justify-content-between w-100">
                      <span className="ProgramCreation__label d-block">
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
            </form>
            <div className="ProgramCreation__form ProgramCreation__details-form">
              <h2 className="ProgramCreation__subtitle">Program details</h2>
              <div className="ProgramCreation__details-form-tabs">
                <div className="ProgramCreation__details-form-row row align-items-center g-0">
                  <div className="ProgramCreation__details-form-tab ProgramCreation__details-form-tab--active">
                    <UIDropdown
                      className="w-100"
                      title="Select asset type"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </div>
                  <div className="ProgramCreation__details-form-tab">
                    <UIDropdown
                      title="Select asset type"
                      items={[{ title: "Item 1" }, { title: "Item 2" }]}
                    ></UIDropdown>
                  </div>
                  <div className="ProgramCreation__details-form-tab ProgramCreation__details-form-tab--action flex-grow-1 d-flex align-items-center">
                    <button className="UIButton UIButton--green-outline UIButton--sm d-flex align-items-center">
                      <span>+</span>Add asset type
                    </button>
                  </div>
                </div>
              </div>
              <div className="ProgramCreation__details-form-body">
                <div className="Product-details-form__item">
                  <div className="ProgramCreation__details-form-columns ProgramCreation__details-form-columns--header">
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--type">
                      <div className="d-flex align-items-center gap-2 ProgramCreation__required">
                        <span className="ProgramCreation__label mb-0">
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
                      <div className="d-flex align-align-items-center gap-2 ProgramCreation__required">
                        <span className="ProgramCreation__label mb-0">
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
                        <span className="Checkbox__text">Information</span>
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
                        <span className="Checkbox__text">Low</span>
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
                        <span className="Checkbox__text">Medium</span>
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
                        <span className="Checkbox__text">High</span>
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
                        <span className="Checkbox__text">Critical</span>
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
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset ProgramCreation__required">
                      <span className="ProgramCreation__label">
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
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset ">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                        defaultValue={
                          "https://www.google.com/images/bitcoin.png"
                        }
                      />
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
                    <div className="ProgramCreation__details-form-column ProgramCreation__details-form-column--asset ">
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                      />
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
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                      />
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
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                      />
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
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                      />
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
                      <input
                        className="UIInput w-100"
                        type="text"
                        placeholder="http://      Enter asset URL"
                      />
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
                <div className="ProgramCreation__required d-flex justify-content-between align-items-start">
                  <span className="ProgramCreation__label">
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
          </div>
        </div>
      </div>

      {/* TEST ITEMS */}
      {/* TEST ITEMS */}
      {/* TEST ITEMS */}

      <div className="Test d-none">
        <h1 className="mb-5">Ваш код будет тут</h1>
        <hr className="my-5" />

        <div className="mb-5">
          <h3>
            1. См. готовые UI элементы{" "}
            <Link target="_blank" to="/ui">
              тут
            </Link>{" "}
            (кнопки, инпут, дропдаун)
          </h3>
        </div>

        <div className="col-12 col-lg-8 col-xxl-6 bg-success mb-5">
          <h3>
            2. Пример классов Bootstrap (типа col-lg-6) с нашими кастомными
            брекпойнтами
          </h3>
          <code>
            <pre className="bg-light mx-3 rounded-1 p-2">
              {'<div class="col-12 col-lg-8 col-xxl-6">...</div>'}
            </pre>
          </code>
          У этого блока:
          <ul>
            <li>На маленьких экранах (до 992) — ширина блока = 12 (col-12)</li>
            <li>
              На экранах от lg до xxl (992-1400) — ширина блока = 8 (col-lg-8)
            </li>
            <li>
              На экранах xxl и выше (1400+) — ширина блока = 6 (col-xxl-6)
            </li>
          </ul>
        </div>

        <div className="Test__mixins mb-5">
          <h3>3. Пример использования миксина remedy-media-query</h3>
          <ul>
            <li className="mb-3">
              Зеленый — на экранах <b>lg и ниже (0-992px)</b>
            </li>
            <li className="mb-3">
              Красный — от <b>lg до xl (992-1200px)</b>
              <pre>
                {
                  "@include remedy-media-query(lg, Infinity) { background: red; }"
                }
              </pre>
            </li>
            <li className="mb-3">
              Синий — на <b>xl и выше (1200px+)</b>
              <pre>
                {
                  "@include remedy-media-query(xl, Infinity) { background: blue; }"
                }
              </pre>
            </li>
          </ul>
        </div>

        <div className="Test__fonts mb-5">
          <h3>4. Пример размеров шрифтов</h3>
          <ul className="mt-4">
            <li className="Test__fonts-item Test__fonts-item--size10">
              Размер 1rem = 10px на 1440
            </li>
            <li className="Test__fonts-item Test__fonts-item--size16">
              Размер 1.6rem = 16px на 1440
            </li>
            <li className="Test__fonts-item Test__fonts-item--size20">
              Размер 2rem = 20px на 1440
            </li>
          </ul>
        </div>

        <div className="Test__variables mb-5">
          <h3>5. Переменные</h3>
          <ul className="mt-4">
            <li className="Test__variables-font Test__variables-font--montreal">
              Шрифт PP Neue Montreal — var(--remedy-Global--font-text)
            </li>
            <li className="Test__variables-font Test__variables-font--telegraf">
              Шрифт PP Telegraf — var(--remedy-Global--font-header)
            </li>
            <li>
              Sass-цвета:
              <span
                className="Test__variables-color Test__variables-color--white"
                title="$remedy-Global--color-white"
              />
              <span
                className="Test__variables-color Test__variables-color--gray"
                title="$remedy-Global--color-gray"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-1"
                title="$remedy-Global--color-dark-1"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-2"
                title="$remedy-Global--color-dark-2"
              />
              <span
                className="Test__variables-color Test__variables-color--dark-3"
                title="$remedy-Global--color-dark-3"
              />
              <span
                className="Test__variables-color Test__variables-color--green"
                title="$remedy-Global--color-green"
              />
            </li>
          </ul>
        </div>

        <div className="Test__variables mb-5">
          <h3>6. Максимальная ширина контента</h3>
          <div className="bg-info my-3">
            Этот блок растягивается в ширину бесконечно
          </div>
          <div className="bg-danger Global__app-content-max-width">
            А этот растягивается только до 1400px (так как имеет
            class="Global__app-content-max-width").
            <br />
            <i>
              Используйте Global__app-content-max-width везде, кроме редких
              случаев, когда, например, надо сделать градиент во всю ширину
            </i>
          </div>
        </div>
      </div>
    </UserContainer>
  );
}
