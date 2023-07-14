import React from 'react';
import { Link } from 'react-router-dom';
import { UIDropdown } from './UIDropdown.jsx';

export function UIStyleGuide(){
  return (
    <div className="p-5 m-5">

      <Link to="/">← Back to homepage</Link>

      <h1 className="my-5">UI Elements</h1>

      <button className="UIButton UIButton--green">Button</button>
      <pre className="mt-4">
        &lt;button className="UIButton UIButton--green"&gt;Button&lt;/button&gt;
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green UIButton--sm">Button</button>
      <pre className="mt-4">
        &lt;button className="UIButton UIButton--green UIButton--sm"&gt;Button&lt;/button&gt;
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green-outline">Button</button>
      <pre className="mt-4">
        &lt;button className="UIButton UIButton--green-outline"&gt;Button&lt;/button&gt;
      </pre>

      <hr className="my-5"/>

      <button className="UIButton UIButton--green-outline UIButton--sm">Button</button>
      <pre className="mt-4">
        &lt;button className="UIButton UIButton--green-outline UIButton--sm"&gt;Button&lt;/button&gt;
      </pre>

      <hr className="my-5"/>

      <input className="UIInput" type="text" style={{ width: 300 }}/>
      <pre className="mt-4">
        &lt;input className="UIInput" type="text"/&gt;
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
        import &#123; UIDropdown &#125; from '../UI/UIDropdown.jsx';<br/>
        ...<br/>
        &lt;UIDropdown className="my-custom-class" title="Dropdown title" items=&#123;[ &#123;title: "Item 1"&#125;, &#123;title: "Item 2"&#125; ]&#125;&gt;&lt;/UIDropdown&gt;
      </pre>

    </div>
  );
}
