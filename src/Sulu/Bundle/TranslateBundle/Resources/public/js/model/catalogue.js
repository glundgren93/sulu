/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART Webservices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

define(['backbonerelational'], function() {
    return Backbone.RelationalModel.extend({
        urlRoot: '/translate/api/catalogues',
        defaults: {
            id: null,
            code: '',
            translations: []
        }
    });
});