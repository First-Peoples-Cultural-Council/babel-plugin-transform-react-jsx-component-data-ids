<ComponentA data-component-id="ComponentA">
    <h1>This is a title</h1>

    <div><span>Skip Me</span></div>

    <div data-component-id="div-button">I'm an important div!</div>

    <ComponentC data-component-id="ComponentC">I should get an auto-generated one</ComponentC>

    <ComponentB data-non-impacted="HelloWorld" data-component-id="ComponentB-search">
            <InnerComponent data-non-impacted="Hello" data-non-impacted-after="Goodbye" data-component-id="InnerComponent-language-dropdown" />
    </ComponentB>
</ComponentA>;
