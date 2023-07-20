/**
 * @generated SignedSource<<9049c2373a74bff43aef3dd1331ed417>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "shell-scripts"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "egorvinogradov"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayDemoShellQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "repository(name:\"shell-scripts\",owner:\"egorvinogradov\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayDemoShellQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"shell-scripts\",owner:\"egorvinogradov\")"
      }
    ]
  },
  "params": {
    "cacheID": "4488a16cfba2e0810c70ae8e51dd515d",
    "id": null,
    "metadata": {},
    "name": "RelayDemoShellQuery",
    "operationKind": "query",
    "text": "query RelayDemoShellQuery {\n  repository(owner: \"egorvinogradov\", name: \"shell-scripts\") {\n    name\n    description\n    id\n  }\n}\n"
  }
};
})();

node.hash = "52fe02c0a18a4acc0e61e39ba039e245";

module.exports = node;
