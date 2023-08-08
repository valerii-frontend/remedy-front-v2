import React from "react";
import { Link } from "react-router-dom";
import { UserContainer } from "../User/UserContainer.jsx";
import { UIDropdown } from "../UI/UIDropdown.jsx";
import "./YourCodeHere.scss";

export function YourCodeHere() {
  return (
    <UserContainer>
      <div className='Global__app-content-max-width'>
        <div className='Creation'>
          <div className='Creation__header'>
            <h1 className='Creation__title'>New program creation</h1>
            <div className='Creation__actions Actions-creation d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <button className='UIButton UIButton--sm UIButton--green-outline Actions-creation__btn-back'></button>
                <div className='Actions-creation__label'>Currencyzen</div>
              </div>
              <div className='Actions-creation__buttons'>
                <button className='UIButton UIButton--green-outline'>Save as draft</button>
                <button className='UIButton UIButton--green' disabled>
                  Launch program
                </button>
              </div>
            </div>
          </div>
          <form className='Creation__form Information-form' onSubmit={() => {}}>
            <h2 className='Creation__subtitle'>general information</h2>
            <div className='Information-form__row row'>
              <div className='col-6'>
                <label className='General-form-item Creation__item--required Creation__item--invalid w-100'>
                  <span className='General-form-item__text d-block'>Program name</span>
                  <input required className='UIInput w-100' type='text' placeholder='Enter program name' />
                  <span className='Creation__error'>
                    Use alphanumeric field with allowed special characters, spaces and upper and lowercase letters
                  </span>
                </label>
              </div>
              <div className='col-6'>
                <label className='File-upload'>
                  <span className='File-upload__text d-block'>Program logo</span>
                  <span className='File-upload__placeholder File-upload__placeholder--empty'>
                    Upload your program logo
                  </span>
                  <input className='UIInput w-100 File-upload__input' type='file' />
                </label>
              </div>
            </div>
            <div className='Information-form__row row'>
              <div className='col-6'>
                <label className='General-form-item w-100'>
                  <span className='General-form-item__text d-block'>Programming language</span>
                  <UIDropdown
                    className='Information-form__select'
                    title='Select programming language'
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </label>
              </div>
              <div className='col-6'>
                <label className='General-form-item Creation__item--required w-100'>
                  <span className='General-form-item__text d-block'>Chains</span>
                  <UIDropdown
                    className='Information-form__select'
                    title='Select chain'
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </label>
              </div>
            </div>
            <div className='Information-form__row row'>
              <div className='col-6'>
                <label className='General-form-item w-100'>
                  <span className='General-form-item__text d-block'>Product types</span>
                  <UIDropdown
                    className='Information-form__select'
                    title='Select product type'
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </label>
              </div>
              <div className='col-6'>
                <label className='General-form-item Creation__item--required w-100'>
                  <span className='General-form-item__text d-block'>Project categories</span>
                  <UIDropdown
                    className='Information-form__select'
                    title='Select project category'
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </label>
              </div>
            </div>
            <div className='Information-form__row row'>
              <div className='col-12'>
                <label className='General-form-item Creation__item--required w-100'>
                  <span className='General-form-item__text d-block'>Program description</span>
                  <textarea
                    className='UIInput General-form-item__description w-100'
                    required
                    placeholder='Enter program description'></textarea>
                </label>
              </div>
            </div>
          </form>
          <div className='Creation__form Program-details-form'>
            <h2 className='Creation__subtitle'>Program details</h2>
            <div className='Program-details-form__tabs'>
              <div className='Program-details-form__row row align-items-center g-0'>
                <div className='Program-details-form__tab Program-details-form__tab--active'>
                  <UIDropdown
                    className='w-100'
                    title='Select asset type'
                    items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </div>
                <div className='Program-details-form__tab'>
                  <UIDropdown title='Select asset type' items={[{ title: "Item 1" }, { title: "Item 2" }]}></UIDropdown>
                </div>
                <div className='Program-details-form__tab Program-details-form__tab--action flex-grow-1 d-flex align-items-center'>
                  <button className='UIButton UIButton--green-outline UIButton--sm d-flex align-items-center'>
                    <span>+</span>Add asset type
                  </button>
                </div>
              </div>
            </div>
            <div className='Program-details-form__body'>
              <div className='Product-details-form__item'>
                <div className='Program-details-form__columns Program-details-form__columns--header'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <div className='d-flex align-items-center gap-2'>
                      <span>*Payout type</span>
                      <span className='Tooltip'>
                        <div className='Tooltip__icon'></div>
                        <div className='Tooltip__body'>
                          Once checked payout’s maximum value and description become mandatory. At least one payout
                          type’s maximum has to be $1000 or bigger.
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max'>
                    <span>Payout maximum</span>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <div className='d-flex align-align-items-center gap-2'>
                      <span>*Severity description</span>
                      <span className='Tooltip'>
                        <div className='Tooltip__icon'></div>
                        <div className='Tooltip__body'>
                          You have to input at least one payout type’s severity description.
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <label className='Checkbox'>
                      <input type='checkbox' className='Checkbox__input' checked />
                      <span className='Checkbox__text'>Information</span>
                    </label>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max Program-details-form__column--currency active'>
                    <input className='UIInput UIInput--price w-100' value={1000} type='number' placeholder='100' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <input
                      className='UIInput w-100'
                      type='text'
                      placeholder='Enter severity description'
                      value={"Lorem ipsum dolor sit amet."}
                    />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <label className='Checkbox'>
                      <input type='checkbox' className='Checkbox__input' />
                      <span className='Checkbox__text'>Low</span>
                    </label>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max Program-details-form__column--currency'>
                    <input className='UIInput UIInput--price w-100' type='number' placeholder='100' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <input className='UIInput w-100' type='text' placeholder='Enter severity description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <label className='Checkbox'>
                      <input type='checkbox' className='Checkbox__input' />
                      <span className='Checkbox__text'>Medium</span>
                    </label>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max Program-details-form__column--currency'>
                    <input className='UIInput UIInput--price w-100' type='number' placeholder='100' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <input className='UIInput w-100' type='text' placeholder='Enter severity description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <label className='Checkbox'>
                      <input type='checkbox' className='Checkbox__input' />
                      <span className='Checkbox__text'>High</span>
                    </label>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max Program-details-form__column--currency'>
                    <input className='UIInput UIInput--price w-100' type='number' placeholder='100' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <input className='UIInput w-100' type='text' placeholder='Enter severity description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--type'>
                    <label className='Checkbox'>
                      <input type='checkbox' className='Checkbox__input' />
                      <span className='Checkbox__text'>Critical</span>
                    </label>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--max Program-details-form__column--currency'>
                    <input className='UIInput UIInput--price w-100' type='number' placeholder='100' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--description'>
                    <input className='UIInput w-100' type='text' placeholder='Enter severity description' />
                  </div>
                </div>
              </div>
              <div className='Product-details-form__item'>
                <div className='Program-details-form__columns Program-details-form__columns--header'>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <span>*Program assets</span>
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <span>Asset description</span>
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input
                      className='UIInput w-100'
                      type='text'
                      placeholder='http://      Enter asset URL'
                      value={"https://www.google.com/images/bitcoin.png"}
                    />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input
                      className='UIInput w-100'
                      type='text'
                      placeholder='Enter asset description'
                      value={"Bitcoin logo"}
                    />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input className='UIInput w-100' type='text' placeholder='http://      Enter asset URL' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input className='UIInput w-100' type='text' placeholder='Enter asset description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input className='UIInput w-100' type='text' placeholder='http://      Enter asset URL' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input className='UIInput w-100' type='text' placeholder='Enter asset description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input className='UIInput w-100' type='text' placeholder='http://      Enter asset URL' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input className='UIInput w-100' type='text' placeholder='Enter asset description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input className='UIInput w-100' type='text' placeholder='http://      Enter asset URL' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input className='UIInput w-100' type='text' placeholder='Enter asset description' />
                  </div>
                </div>
                <div className='Program-details-form__columns'>
                  <div className='Program-details-form__column Program-details-form__column--asset '>
                    <input className='UIInput w-100' type='text' placeholder='http://      Enter asset URL' />
                  </div>
                  <div className='Program-details-form__column Program-details-form__column--asset'>
                    <input className='UIInput w-100' type='text' placeholder='Enter asset description' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEST ITEMS */}
      {/* TEST ITEMS */}
      {/* TEST ITEMS */}

      <div className='Test d-none'>
        <h1 className='mb-5'>Ваш код будет тут</h1>
        <hr className='my-5' />

        <div className='mb-5'>
          <h3>
            1. См. готовые UI элементы{" "}
            <Link target='_blank' to='/ui'>
              тут
            </Link>{" "}
            (кнопки, инпут, дропдаун)
          </h3>
        </div>

        <div className='col-12 col-lg-8 col-xxl-6 bg-success mb-5'>
          <h3>2. Пример классов Bootstrap (типа col-lg-6) с нашими кастомными брекпойнтами</h3>
          <code>
            <pre className='bg-light mx-3 rounded-1 p-2'>{'<div class="col-12 col-lg-8 col-xxl-6">...</div>'}</pre>
          </code>
          У этого блока:
          <ul>
            <li>На маленьких экранах (до 992) — ширина блока = 12 (col-12)</li>
            <li>На экранах от lg до xxl (992-1400) — ширина блока = 8 (col-lg-8)</li>
            <li>На экранах xxl и выше (1400+) — ширина блока = 6 (col-xxl-6)</li>
          </ul>
        </div>

        <div className='Test__mixins mb-5'>
          <h3>3. Пример использования миксина remedy-media-query</h3>
          <ul>
            <li className='mb-3'>
              Зеленый — на экранах <b>lg и ниже (0-992px)</b>
            </li>
            <li className='mb-3'>
              Красный — от <b>lg до xl (992-1200px)</b>
              <pre>{"@include remedy-media-query(lg, Infinity) { background: red; }"}</pre>
            </li>
            <li className='mb-3'>
              Синий — на <b>xl и выше (1200px+)</b>
              <pre>{"@include remedy-media-query(xl, Infinity) { background: blue; }"}</pre>
            </li>
          </ul>
        </div>

        <div className='Test__fonts mb-5'>
          <h3>4. Пример размеров шрифтов</h3>
          <ul className='mt-4'>
            <li className='Test__fonts-item Test__fonts-item--size10'>Размер 1rem = 10px на 1440</li>
            <li className='Test__fonts-item Test__fonts-item--size16'>Размер 1.6rem = 16px на 1440</li>
            <li className='Test__fonts-item Test__fonts-item--size20'>Размер 2rem = 20px на 1440</li>
          </ul>
        </div>

        <div className='Test__variables mb-5'>
          <h3>5. Переменные</h3>
          <ul className='mt-4'>
            <li className='Test__variables-font Test__variables-font--montreal'>
              Шрифт PP Neue Montreal — var(--remedy-Global--font-text)
            </li>
            <li className='Test__variables-font Test__variables-font--telegraf'>
              Шрифт PP Telegraf — var(--remedy-Global--font-header)
            </li>
            <li>
              Sass-цвета:
              <span
                className='Test__variables-color Test__variables-color--white'
                title='$remedy-Global--color-white'
              />
              <span className='Test__variables-color Test__variables-color--gray' title='$remedy-Global--color-gray' />
              <span
                className='Test__variables-color Test__variables-color--dark-1'
                title='$remedy-Global--color-dark-1'
              />
              <span
                className='Test__variables-color Test__variables-color--dark-2'
                title='$remedy-Global--color-dark-2'
              />
              <span
                className='Test__variables-color Test__variables-color--dark-3'
                title='$remedy-Global--color-dark-3'
              />
              <span
                className='Test__variables-color Test__variables-color--green'
                title='$remedy-Global--color-green'
              />
            </li>
          </ul>
        </div>

        <div className='Test__variables mb-5'>
          <h3>6. Максимальная ширина контента</h3>
          <div className='bg-info my-3'>Этот блок растягивается в ширину бесконечно</div>
          <div className='bg-danger Global__app-content-max-width'>
            А этот растягивается только до 1400px (так как имеет class="Global__app-content-max-width").
            <br />
            <i>
              Используйте Global__app-content-max-width везде, кроме редких случаев, когда, например, надо сделать
              градиент во всю ширину
            </i>
          </div>
        </div>
      </div>
    </UserContainer>
  );
}
