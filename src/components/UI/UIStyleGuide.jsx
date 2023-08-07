import React from 'react';
import { Link } from 'react-router-dom';
import { UIDropdown } from './UIDropdown.jsx';

export function UIStyleGuide(){
  return (
    <div className="p-5 bg-dark">

      <Link to="/">← Back to homepage</Link>

      <h1 className="my-5">UI Elements</h1>

      <button className="UIButton UIButton--green me-5">Button</button>
      <button className="UIButton UIButton--green" disabled={true}>Disabled</button>
      <pre className="mt-4">
        {'<button className="UIButton UIButton--green">Button</button>'}
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green UIButton--sm">Button</button>
      <pre className="mt-4">
        {'<button className="UIButton UIButton--green UIButton--sm">Button</button>'}
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green-outline me-5">Button2</button>
      <button className="UIButton UIButton--green-outline" disabled={true}>Disabled</button>
      <pre className="mt-4">
        {'<button className="UIButton UIButton--green-outline">Button</button>'}
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green-outline UIButton--sm">Button</button>
      <pre className="mt-4">
        {'<button className="UIButton UIButton--green-outline UIButton--sm">Button</button>'}
      </pre>

      <hr className="my-5"/>

      <input className="UIInput" type="text" placeholder="Placeholder..." style={{ width: 300 }}/>
      <pre className="mt-4">
        {'<input className="UIInput" type="text" placeholder="Placeholder..."/>'}
      </pre>

      <hr className="my-5"/>

      <UIDropdown
        style={{ width: 300 }}
        title="Dropdown title"
        items={[
          { title: 'Item 1' },
          { title: 'Item 2' },
          { title: 'Item 3' },
        ]}>
      </UIDropdown>

      <pre className="mt-4">
        {`import { UIDropdown } from '../UI/UIDropdown.jsx';`}<br/>
        ...<br/>
        {`<UIDropdown className="my-custom-class" title="Dropdown title" items={[ {title: "Item 1"}, {title: "Item 2"} ]}></UIDropdown>`}
      </pre>

    </div>
  );
}
