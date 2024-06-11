export default function CatalogFilter() {
  return (
    <div className="text-black">
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Brand</div>
        <div className="collapse-content">
          <p className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20">
            Casa Bruja
          </p>
          <p className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20">
            Rana Dorada
          </p>
          <p className="p-1 rounded-md hover:cursor-pointer hover:bg-black/20">
            Clandestina
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Style</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Aroma</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Body</div>
        <div className="collapse-content">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
