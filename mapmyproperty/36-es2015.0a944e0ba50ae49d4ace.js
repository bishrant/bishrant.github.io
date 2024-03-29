(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0BfS":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var o,a=r("OIYi"),i=r("UBvB");function n(e){e.fragment.include(i.a),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(a.a`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}(o=n||(n={})).bindUniforms=function(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))},o.bindViewCustomOrigin=function(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)},o.bindView=function(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}},"1TnO":function(e,t,r){"use strict";r.d(t,"a",function(){return c});var o,a=r("Cy1f"),i=r("OIYi"),n=r("mmTy"),s=r("aiF/");function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(s.a,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[i.a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,i.a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?i.a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,i.a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,i.a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?i.a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:i.a``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}(o=c||(c={})).Uniforms=class{},o.bindCustomOrigin=function(e,t){Object(n.b)(t,l,d,3),e.setUniform3fv("viewOriginHi",l),e.setUniform3fv("viewOriginLo",d)};const l=Object(a.e)(),d=Object(a.e)()},"1W42":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r("wSAH");var o=r("OIYi");function a(e,t){o.a`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},"368d":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o.a`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(o.a`
      void forwardTextureCoordinates() {}
    `)}},"6kvK":function(e,t,r){"use strict";r.d(t,"a",function(){return d});var o=r("OIYi"),a=r("xRv2"),i=r("0BfS"),n=r("XV/G"),s=r("cIib");function c(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===a&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o.a`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(o.a`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(o.a`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}function d(e,t){const r=e.fragment;e.include(l),e.include(s.a,t),0!==t.pbrMode&&e.include(n.a,t),e.include(c,t),t.receiveShadows&&e.include(i.a,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(a.a),r.code.add(o.a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(o.a`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(r.code.add(1===t.viewingMode?o.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `:o.a`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(o.a`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(o.a`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(o.a`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(o.a`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(o.a`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(o.a`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(o.a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?o.a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o.a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}},AxBq:function(e,t,r){"use strict";r.d(t,"a",function(){return P}),r.d(t,"b",function(){return I});var o=r("OIYi"),a=r("Tbkp"),i=r("aQrP"),n=r("0nJL"),s=r("0Ect"),c=r("viRi"),l=r("69UF"),d=r("F7CJ"),u=r("xtdb"),m=r("0BfS"),p=r("vXUg"),f=r("XV/G"),h=r("1TnO"),v=r("368d"),b=r("p9cc"),g=r("F8o4"),x=r("wzLF"),y=r("sJp1"),O=r("bLIi"),w=r("bVvB"),T=r("fRF2"),C=r("fiGu"),S=r("DXpj"),M=r("cIib"),_=r("6kvK"),A=r("qrV2"),j=r("1W42"),R=r("NiZE");function I(e){const t=new i.a,r=t.vertex.code,I=t.fragment.code;return t.include(j.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(h.a,e),t.include(d.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(a.a,{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g.a),t.include(S.a,e),t.include(T.a,e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(v.a,e),t.include(p.a,e),t.include(O.a,e),t.include(w.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(o.a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o.a.float(l.c)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?o.a`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(u.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(R.a),I.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(_.a,e),t.include(M.a,e),t.include(l.a,e),e.receiveShadows&&t.include(m.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(u.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(f.a,e),t.fragment.include(R.a),t.include(A.a,e),I.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?o.a`
        vec3 normal = screenDerivativeNormal(localvpos);`:o.a`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?o.a`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o.a`vec3 normalGround = normalize(vpos + localOrigin);`:o.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o.a``}
        ${1===e.pbrMode||2===e.pbrMode?o.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(C.a,e),t}var P=Object.freeze({__proto__:null,build:I})},DXpj:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("OIYi"),a=r("fLTx");function i(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),r.code.add(2===t.doubleSidedMode?o.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `:o.a`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(o.a`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(a.a,t),r.code.add(o.a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},F8o4:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e){e.vertex.code.add(o.a`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},NiZE:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("OIYi"),a=r("Q3fD");function i(e){e.include(a.a),e.code.add(o.a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.a.int(1)}) {
        return allMixed;
      }
      else if (mode == ${o.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.a.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.a.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o.a.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},"XV/G":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var o=r("OIYi"),a=r("xRv2");function i(e){const t=e.fragment.code;t.add(o.a`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(o.a`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(o.a`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function n(e,t){const r=e.fragment.code;e.include(a.a),3===t.pbrMode||4===t.pbrMode?(r.add(o.a`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(o.a`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(o.a`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(o.a`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(o.a`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(i),r.add(o.a`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(o.a`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(o.a`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(o.a`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(o.a`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(o.a`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},"aiF/":function(e,t,r){"use strict";r.d(t,"a",function(){return b}),r.d(t,"b",function(){return g});var o=r("wSAH"),a=r("OIYi"),i=r("srIe"),n=(r("OKTS"),r("Cy1f")),s=r("jjdI"),c=r("EVMh"),l=r("fOQB"),d=r("D6bk"),u=r("mmTy"),m=r("0meK"),p=r("N3sV");class f{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(p.a)(e).then(e=>{this.svgAlwaysPremultipliesAlpha=!e})}get doublePrecisionRequiresObfuscation(){if(Object(i.j)(this._doublePrecisionRequiresObfuscation)){const e=v(this.context,!1),t=v(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let h=null;function v(e,t){const r=new m.a(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),o=l.a.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),a=new d.a(e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:o}),i=Object(n.g)(5633261.287538229,2626832.878767164,1434988.0495278358),p=Object(n.g)(5633271.46742708,2626873.6381334523,1434963.231608387),f=function(r,o){const a=new s.a(e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),i=new Float32Array(6);Object(u.a)(r,i,3);const n=new Float32Array(6);return Object(u.a)(o,n,3),e.bindProgram(a),a.setUniform3f("u_highA",i[0],i[2],i[4]),a.setUniform3f("u_lowA",i[1],i[3],i[5]),a.setUniform3f("u_highB",n[0],n[2],n[4]),a.setUniform3f("u_lowB",n[1],n[3],n[5]),a}(i,p),h=e.getBoundFramebufferObject(),{x:v,y:b,width:g,height:x}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(a),e.drawArrays(5,0,4);const y=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,y),f.dispose(),a.dispose(!1),o.dispose(),r.dispose(),e.setViewport(v,b,g,x),e.bindFramebuffer(h);const O=(i[2]-p[2])/25,w=Object(c.k)(y);return Math.abs(O-w)}function b({code:e},t){e.add(t.doublePrecisionRequiresObfuscation?a.a`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `:a.a`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function g(e){return!!Object(o.a)("force-double-precision-obfuscation")||(t=e,(Object(i.j)(h)||h.context!==t)&&(h=new f(t)),h).doublePrecisionRequiresObfuscation;var t}},bLIi:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("OIYi");function a(e){e.vertex.code.add(o.a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.a.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.a.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.a.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.a.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function i(e,t){t.symbolColor?(e.include(a),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),e.vertex.code.add(t.symbolColor?o.a`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `:o.a`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},cIib:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o.a`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(o.a`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},fLTx:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var o=r("OIYi"),a=r("368d");function i(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.a`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}function n(e,t){e.include(a.a,t),e.fragment.code.add(o.a`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(o.a`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(i),e.fragment.code.add(o.a`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},fRF2:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var o,a=r("OIYi"),i=r("wzLF"),n=r("Cy1f"),s=r("2uVf"),c=r("r+FG"),l=r("aiF/"),d=r("sJp1");function u(e,t){e.include(d.a),e.vertex.include(l.a,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(a.a`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(a.a`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}function m(e,t){0===t.normalType||1===t.normalType?(e.include(i.a,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(a.a`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(u,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.a`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?a.a`normalize(vPositionWorldCameraRelative);`:a.a`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.a`
      void forwardNormal() {}
    `)}(o=u||(u={})).ModelTransform=class{constructor(){this.worldFromModel_RS=Object(s.a)(),this.worldFromModel_TH=Object(n.e)(),this.worldFromModel_TL=Object(n.e)()}},o.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(n.e)(),this.worldFromView_TL=Object(n.e)(),this.viewFromCameraRelative_RS=Object(s.a)(),this.projFromView=Object(c.b)()}},o.bindModelTransform=function(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)},o.bindViewProjTransform=function(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)},(m||(m={})).bindUniforms=function(e,t){e.setUniformMatrix4fv("viewNormal",t)}},fiGu:function(e,t,r){"use strict";r.d(t,"a",function(){return p});var o=r("OIYi"),a=r("Tbkp"),i=r("0nJL"),n=r("agdK"),s=r("viRi"),c=r("69UF"),l=r("wtEh"),d=r("368d"),u=r("wzLF"),m=r("fRF2");function p(e,t){const r=e.vertex.code,p=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a.a,{linearDepth:!0}),e.include(d.a,t),e.include(s.a,t),e.include(l.a,t),e.include(i.a,t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c.a,t),p.add(o.a`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(u.a,t),e.include(m.a,t),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(o.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?o.a`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(c.a,t),p.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?o.a`
            vec3 normal = screenDerivativeNormal(vPositionView);`:o.a`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a.a,{linearDepth:!1}),e.include(d.a,t),e.include(s.a,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o.a`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i.a,t),e.include(c.a,t),e.include(n.a),p.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},lKY1:function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",function(){return ut}),r.d(t,"gltfToEngineResources",function(){return pt}),r.d(t,"parseUrl",function(){return mt});var o=r("srIe"),a=r("Cy1f"),i=r("5DEt"),n=r("15Hh"),s=r("SbiP"),c=r("2uVf"),l=r("r+FG"),d=r("HJJS"),u=r("VeZB"),m=r("6S2I");const p=m.a.getLogger("esri.views.3d.support.buffer.math");function f(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[4],c=r[5],l=r[6],d=r[8],u=r[9],m=r[10],f=r[12],h=r[13],v=r[14],b=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let p=0;p<o;p++){const e=p*g,t=p*y,r=x[t],o=x[t+1],O=x[t+2];b[e]=a*r+s*o+d*O+f,b[e+1]=i*r+c*o+u*O+h,b[e+2]=n*r+l*o+m*O+v}}function h(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],m=r[8],f=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let p=0;p<o;p++){const e=p*h,t=p*b,r=v[t],o=v[t+1],g=v[t+2];f[e]=a*r+s*o+d*g,f[e+1]=i*r+c*o+u*g,f[e+2]=n*r+l*o+m*g}}function v(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=r*n[t],a[e+1]=r*n[t+1],a[e+2]=r*n[t+2]}}Object.freeze({__proto__:null,transformMat4:f,transformMat3:h,scale:v,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=n[t]>>r,a[e+1]=n[t+1]>>r,a[e+2]=n[t+2]>>r}}});var b=r("QmHG"),g=r("Ango"),x=r("/ADo"),y=r("qXiY"),O=r("aK8v"),w=r("fFEv"),T=r("NbNv"),C=r("WVfK"),S=r("69UF"),M=r("dDjh"),_=r("pO5D"),A=r("w6Td"),j=r("ypgp"),R=r("2jVe"),I=r("+h6m"),P=r("jjdI"),L=r("GJyJ"),B=r("jpeq"),F=r("0nJL"),E=r("agdK"),N=r("viRi"),D=r("F7CJ"),z=r("xtdb"),V=r("h7dw"),U=r("0BfS"),G=r("aiF/"),k=r("1TnO"),H=r("p9cc"),q=r("AxBq");class $ extends j.a{initializeProgram(e){const t=$.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(G.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new P.a(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),I.a)}bindPass(e,t,r){B.a.bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(z.a)(this.program,e,r)),7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",w.b[t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",w.b[t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&H.a.bindUniforms(this.program,t,this.configuration.isSchematic)):4===o&&E.a.bindOutputHighlight(e,this.program,r),N.a.bindUniformsForSymbols(this.program,t),D.a.bindUniforms(this.program,t,r),Object(w.a)(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(a.g)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;B.a.bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&B.a.bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&k.a.bindCustomOrigin(this.program,t),F.a.bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&U.a.bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,a=2===e;return Object(L.d)({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?M.f:Object(M.a)(e),culling:W(r),depthTest:{func:Object(M.b)(e)},depthWrite:o||a?r.writeDepth&&L.c:null,colorWrite:L.b,stencilWrite:r.sceneHasOcludees?V.h:null,stencilTest:r.sceneHasOcludees?t?V.d:V.c:null,polygonOffset:o||a?null:Object(M.g)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}$.shader=new A.a(q.a,()=>r.e(173).then(r.bind(null,"SjXz")));const W=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class J extends R.a{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(_.a)([Object(R.b)({count:8})],J.prototype,"output",void 0),Object(_.a)([Object(R.b)({count:4})],J.prototype,"alphaDiscardMode",void 0),Object(_.a)([Object(R.b)({count:3})],J.prototype,"doubleSidedMode",void 0),Object(_.a)([Object(R.b)()],J.prototype,"isSchematic",void 0),Object(_.a)([Object(R.b)()],J.prototype,"vertexColors",void 0),Object(_.a)([Object(R.b)()],J.prototype,"offsetBackfaces",void 0),Object(_.a)([Object(R.b)()],J.prototype,"symbolColors",void 0),Object(_.a)([Object(R.b)()],J.prototype,"vvSize",void 0),Object(_.a)([Object(R.b)()],J.prototype,"vvColor",void 0),Object(_.a)([Object(R.b)()],J.prototype,"verticalOffset",void 0),Object(_.a)([Object(R.b)()],J.prototype,"receiveShadows",void 0),Object(_.a)([Object(R.b)()],J.prototype,"slicePlaneEnabled",void 0),Object(_.a)([Object(R.b)()],J.prototype,"sliceHighlightDisabled",void 0),Object(_.a)([Object(R.b)()],J.prototype,"receiveAmbientOcclusion",void 0),Object(_.a)([Object(R.b)()],J.prototype,"screenSizePerspective",void 0),Object(_.a)([Object(R.b)()],J.prototype,"textureAlphaPremultiplied",void 0),Object(_.a)([Object(R.b)()],J.prototype,"hasColorTexture",void 0),Object(_.a)([Object(R.b)()],J.prototype,"usePBR",void 0),Object(_.a)([Object(R.b)()],J.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(_.a)([Object(R.b)()],J.prototype,"hasEmissionTexture",void 0),Object(_.a)([Object(R.b)()],J.prototype,"hasOcclusionTexture",void 0),Object(_.a)([Object(R.b)()],J.prototype,"hasNormalTexture",void 0),Object(_.a)([Object(R.b)()],J.prototype,"instanced",void 0),Object(_.a)([Object(R.b)()],J.prototype,"instancedColor",void 0),Object(_.a)([Object(R.b)()],J.prototype,"instancedDoublePrecision",void 0),Object(_.a)([Object(R.b)()],J.prototype,"vertexTangents",void 0),Object(_.a)([Object(R.b)()],J.prototype,"normalsTypeDerivate",void 0),Object(_.a)([Object(R.b)()],J.prototype,"writeDepth",void 0),Object(_.a)([Object(R.b)()],J.prototype,"sceneHasOcludees",void 0),Object(_.a)([Object(R.b)()],J.prototype,"transparent",void 0),Object(_.a)([Object(R.b)()],J.prototype,"enableOffset",void 0),Object(_.a)([Object(R.b)({count:3})],J.prototype,"cullFace",void 0),Object(_.a)([Object(R.b)({count:4})],J.prototype,"transparencyPassType",void 0),Object(_.a)([Object(R.b)()],J.prototype,"multipassTerrainEnabled",void 0),Object(_.a)([Object(R.b)()],J.prototype,"cullAboveGround",void 0);var X=r("sKsC");class Y extends ${initializeProgram(e){const t=Y.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(G.b)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new P.a(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),I.a)}}Y.shader=new A.a(X.a,()=>r.e(169).then(r.bind(null,"FmK6")));class K extends T.a{constructor(e){super(e,ee),this.supportsEdges=!0,this.techniqueConfig=new J,this.vertexBufferLayout=K.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?K.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||i||o)?!!n||s:r?n?c:s:a||i||o?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.techniqueConfig.doubleSidedMode=this.params.treeRendering?2:this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<M.e),this.techniqueConfig}intersect(e,t,r,o,a,n,s){if(null!==this.params.verticalOffset){const e=o.camera;Object(i.v)(se,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=Object(i.q)(ie,se);break;case 2:t=Object(i.j)(ie,ae)}let s=0;if(null!==this.params.verticalOffset){const r=Object(i.i)(ce,se,e.eye),o=Object(i.o)(r),a=Object(i.d)(r,r,1/o);let n=null;this.params.screenSizePerspective&&(n=Object(i.g)(t,a)),s+=Object(w.g)(e,o,this.params.verticalOffset,n,this.params.screenSizePerspective)}Object(i.d)(t,t,s),Object(i.w)(ne,t,o.transform.inverseRotation),a=Object(i.i)(re,a,ne),n=Object(i.i)(oe,n,ne)}Object(w.e)(e,t,o,a,n,Object(y.f)(o.verticalOffset),s)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new Q(e)}createBufferWriter(){return new te(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(x.a)().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(x.a)();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class Q extends O.a{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=this.techniqueRep.acquireAndReleaseExisting(t.treeRendering?Y:$,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const Z=2.1,ee={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(c.a)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:S.b,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...T.b};class te{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){Object(C.c)(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const re=Object(a.e)(),oe=Object(a.e)(),ae=Object(a.g)(0,0,1),ie=Object(a.e)(),ne=Object(a.e)(),se=Object(a.e)(),ce=Object(a.e)();var le=r("Hizz"),de=r("zlDU"),ue=r("4EHJ"),me=r("9MzC"),pe=r("Lqtk"),fe=r("eSsm");class he{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(ue.u)(e)?(Object(me.u)(t),Object(ue.j)(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(o.j)(this.streamDataRequester))return(await Object(pe.default)(t,{responseType:ve[e]})).data;const a=await Object(fe.c)(this.streamDataRequester.request(t,e,r));if(!0===a.ok)return a.value;throw Object(me.t)(a.error),new de.a("",`Request for resource failed: ${a.error}`)}}const ve={image:"image",binary:"array-buffer",json:"json"};var be=r("grla");function ge(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],c+=a,l+=n}function xe(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;if(Object(be.b)(t.elementType)){const e=Object(be.d)(t.elementType);if(Object(be.c)(t.elementType))for(let t=0;t<s;++t)o[c]=Math.max(i[l]/e,-1),o[c+1]=Math.max(i[l+1]/e,-1),c+=a,l+=n;else for(let t=0;t<s;++t)o[c]=i[l]/e,o[c+1]=i[l+1]/e,c+=a,l+=n}else ge(e,t,r);return e}function ye(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],o[c+2]=i[l+2],c+=a,l+=n}function Oe(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],o[c+2]=i[l+2],o[c+3]=i[l+3],c+=a,l+=n}function we(e,t,r,o,a,i){const n=e.typedBuffer,s=e.typedBufferStride,c=i?i.count:e.count;let l=(i&&i.dstIndex?i.dstIndex:0)*s;for(let d=0;d<c;++d)n[l]=t,n[l+1]=r,n[l+2]=o,n[l+3]=a,l+=s}function Te(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}function Ce(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(be.a)(e.ElementType)))}Object.freeze({__proto__:null,copy:ge,normalizeIntegerBuffer:xe}),Object.freeze({__proto__:null,copy:ye}),Object.freeze({__proto__:null,copy:Oe,fill:we}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<9;++e)o[c+e]=i[l+e];c+=a,l+=n}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<16;++e)o[c+e]=i[l+e];c+=a,l+=n}}}),Object.freeze({__proto__:null,copy:function(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],c+=a,l+=n},makeDense:Te});const Se=m.a.getLogger("esri.views.3d.glTF");var Me=r("bJda"),_e=r("VJrH"),Ae=r("sTkM"),je=r("BPBZ");class Re{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const Ie={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Pe={pbrMetallicRoughness:Ie,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Le={ESRI_externalColorMixMode:"tint"},Be=(e={})=>{const t={...Ie,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(Me.a)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...Le,...e.extras});return{...Pe,...e,pbrMetallicRoughness:t,extras:r}},Fe={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};class Ee{constructor(e,t,r,o,a){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=a,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,o,a)=>(t=o||"",r=a||"","")),{dirPart:t,filePart:r}}(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if(Object(ue.u)(r)){const o=Object(ue.i)(r);if("model/gltf-binary"!==o.mediaType)try{const a=JSON.parse(o.isBase64?atob(o.data):o.data);return new Ee(e,t,r,a)}catch{}const a=Object(ue.j)(r);if(Ee.isGLBData(a))return this.fromGLBData(e,t,r,a)}if(r.endsWith(".gltf")){const a=await e.loadJSON(r,o);return new Ee(e,t,r,a)}const a=await e.loadBinary(r,o);if(Ee.isGLBData(a))return this.fromGLBData(e,t,r,a);const i=await e.loadJSON(r,o);return new Ee(e,t,r,i)}static isGLBData(e){const t=new Re(e);return t.remainingBytes()>=4&&1179937895===t.readUint32()}static async fromGLBData(e,t,r,o){const a=await Ee.parseGLBData(t,o);return new Ee(e,t,r,a.json,a.binaryData)}static async parseGLBData(e,t){const r=new Re(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),a=r.readUint32(),i=r.readUint32();e.assert(1179937895===o,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=i,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==a,"An unsupported GLB container version was detected. Only version 2 is supported.");let n,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(1313821514===o,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),n=await Ge(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(5130562!==o,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return n||e.error("No GLB JSON chunk detected."),{json:n,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let a=this.bufferCache.get(e);if(!a){const i=await this.context.loadBinary(this.resolveUri(r.uri),t);a=new Uint8Array(i),this.bufferCache.set(e,a),o.assert(a.byteLength===r.byteLength,"Buffer byte lengths should match.")}return a}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const a=this.json.bufferViews[r.bufferView],i=await this.getBuffer(a.buffer,t),n=Ve[r.type],s=Ue[r.componentType],c=n*s,l=a.byteStride||c;return{raw:i.buffer,byteStride:l,byteOffset:i.byteOffset+(a.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:n,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Te(this.wrapAccessor(u.l,r));case 5123:return Te(this.wrapAccessor(u.j,r));case 5125:return Te(this.wrapAccessor(u.k,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+ke[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(u.u,o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+ke[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(u.u,o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+ke[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new u.C(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(u.m,o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case 5120:return new u.q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new u.t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new u.o(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new u.r(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new u.s(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new u.m(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(Me.a)(e.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(u.C,o);if(5121===o.componentType)return this.wrapAccessor(u.J,o);if(5123===o.componentType)return this.wrapAccessor(u.H,o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(u.u,o);if(5121===o.componentType)return this.wrapAccessor(u.B,o);if(5123===o.componentType)return this.wrapAccessor(u.z,o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+ke[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const o=this.errorContext;let a=this.materialCache.get(e.material);if(!a){const i=null!=e.material?Be(this.json.materials[e.material]):Be(),n=i.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,d,u,m;n.baseColorTexture&&(o.errorUnsupportedIf(0!==(n.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(n.baseColorTexture.index,t)),i.normalTexture&&(0!==(i.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(i.normalTexture.index,t)),i.occlusionTexture&&r&&(0!==(i.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):d=await this.getTexture(i.occlusionTexture.index,t)),i.emissiveTexture&&r&&(0!==(i.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):u=await this.getTexture(i.emissiveTexture.index,t)),n.metallicRoughnessTexture&&r&&(0!==(n.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):m=await this.getTexture(n.metallicRoughnessTexture.index,t)),a={alphaMode:i.alphaMode,alphaCutoff:i.alphaCutoff,color:n.baseColorFactor,doubleSided:!!i.doubleSided,colorTexture:c,normalTexture:l,name:i.name,id:null!=e.material?e.material:-1,occlusionTexture:d,emissiveTexture:u,emissiveFactor:i.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:m,vertexColors:s,ESRI_externalColorMixMode:i.extras.ESRI_externalColorMixMode}}return a}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],a=(e=>({...Fe,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source];let n=this.textureCache.get(e);if(!n){let o;if(i.uri)o=await this.context.loadImage(this.resolveUri(i.uri),t);else{r.errorUnsupportedIf(null==i.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==i.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[i.bufferView],a=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await async function(e,t){return new Promise((r,o)=>{const a=new Blob([e],{type:t}),i=URL.createObjectURL(a),n=new Image;n.addEventListener("load",()=>{URL.revokeObjectURL(i),"decode"in n?n.decode().then(()=>r(n),()=>r(n)):r(n)}),n.addEventListener("error",e=>{URL.revokeObjectURL(i),o(e)}),n.src=i})}(new Uint8Array(a.buffer,a.byteOffset+(e.byteOffset||0),e.byteLength),i.mimeType)}n={data:o,wrapS:a.wrapS,wrapT:a.wrapT,minFilter:a.minFilter,name:i.name,id:e},this.textureCache.set(e,n)}return n}getNodeTransform(e){if(void 0===e)return De;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=Object(n.l)(Object(l.b)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=Object(l.c)(r),o.translation&&Object(n.s)(t,t,o.translation),o.rotation&&(ze[3]=Object(je.b)(ze,o.rotation),Object(n.q)(t,t,ze[3],ze)),o.scale&&Object(n.r)(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(ue.z)(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=_e.a.parse(this.json.asset.version,"glTF");Ne.validate(e)}checkRequiredExtensionsSupported(){const e=this.json;e.extensionsRequired&&0!==e.extensionsRequired.length&&this.errorContext.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const Ne=new _e.a(2,0,"glTF"),De=Object(n.j)(Object(l.b)(),Math.PI/2),ze=Object(Ae.a)(),Ve={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},Ue={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function Ge(e){return new Promise((t,r)=>{const o=new Blob([e]),a=new FileReader;a.onload=()=>{t(JSON.parse(a.result))},a.onerror=e=>{r(e)},a.readAsText(o)})}const ke={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let He=0;function qe(e){let t=null;return e.json.nodes.forEach(e=>{const r=e.extras;Object(o.k)(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}function $e(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function We(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:Je(t.wrapS),t:Je(t.wrapT)},mipmap:Ye.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(o,r)}return o},a=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(a)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(a,r)}return a}function Je(e){if(33071===e||33648===e||10497===e)return e;Xe.error(`Unexpected TextureSampler WrapMode: ${e}`)}const Xe=new class{error(e){throw new de.a("gltf-loader-error",e)}errorUnsupported(e){throw new de.a("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Se.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},Ye=[9987,9985],Ke=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];var Qe=r("ohva"),Ze=r("EDiM"),et=r("LbAs");const tt=m.a.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function rt(e){throw new de.a("",`Request for object resource failed: ${e}`)}function ot(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(tt.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(tt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(tt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(tt.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else tt.warn("Indexed geometries must specify faces"),o=!1;break}default:tt.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(tt.warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(tt.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function at(e){const t=Object(b.e)();return e.forEach(e=>{const r=e.boundingInfo;Object(o.k)(r)&&(Object(b.j)(t,r.getBBMin()),Object(b.j)(t,r.getBBMax()))}),t}async function it(e,t){const r=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){tt.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(o.k)(t)&&t.disableTextures?Promise.resolve(null):Object(et.a)(s,t);r.push(d.then(e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"})))}const a=await Promise.all(r),i={};for(const o of a)i[o.refId]=o;return i}function nt(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function st(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ct=new _e.a(1,2,"wosr");function lt(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],m=r[8],f=e.typedBuffer,h=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let p=0;p<o;p++){const e=p*h,t=p*b,r=v[t],o=v[t+1],g=v[t+2],x=v[t+3];f[e]=a*r+s*o+d*g,f[e+1]=i*r+c*o+u*g,f[e+2]=n*r+l*o+m*g,f[e+3]=x}}function dt(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=r*n[t],a[e+1]=r*n[t+1],a[e+2]=r*n[t+2],a[e+3]=r*n[t+3]}}async function ut(e,t){const r=mt(Object(s.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=Object(o.k)(t)&&t.streamDataRequester;if(r)return async function(e,t,r){const o=await Object(fe.c)(t.request(e,"json",r));if(!0===o.ok)return o.value;Object(me.t)(o.error),rt(o.error.details.url)}(e,r,t);const a=await Object(fe.c)(Object(pe.default)(e,Object(o.q)(t)));if(!0===a.ok)return a.value.data;Object(me.t)(a.error),rt(a.error)}(e,t);return{resource:r,textures:await it(r.textureDefinitions,t)}}(r.url,t)),i=function(e,t){const r=[],i=[],n=[],s=[],c=e.resource,l=_e.a.parse(c.version||"1.0","wosr");ct.validate(l);const d=c.model.name,u=c.model.geometries,m=c.materialDefinitions,p=e.textures;let f=0;const h=new Map;for(let v=0;v<u.length;v++){const e=u[v];if(!ot(e))continue;const c=st(e),l=e.params.vertexAttributes,d=[];for(const t in l){const e=l[t];d.push([t,{data:e.values,size:e.valuesPerElement,exclusive:!0}])}const b=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)b.push([e,new Uint32Array(t[e].values)])}const x=p&&p[c.texture];if(x&&!h.has(c.texture)){const{image:e,params:t}=x,r=new le.a(e,t);s.push(r),h.set(c.texture,r)}const y=h.get(c.texture),O=y?y.id:void 0;let w=n[c.material]?n[c.material][c.texture]:null;if(!w){const e=m[c.material.substring(c.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s={ambient:Object(a.f)(e.diffuse),diffuse:Object(a.f)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:x?nt(x.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(o.k)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),w=new K(s),n[c.material]||(n[c.material]={}),n[c.material][c.texture]=w}i.push(w);const T=new g.a(d,b);f+=b.position?b.position.length:0,r.push(T)}return{name:d,stageResources:{textures:s,materials:i,geometries:r},pivotOffset:c.model.pivotOffset,boundingBox:at(r),numberOfVertices:f,lodThreshold:null}}(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const c=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):async function(e,t,r={},a=!0){const i=await Ee.load(e,Xe,t,r),n="gltf_"+He++,s={lods:[],materials:new Map,textures:new Map,meta:qe(i)},c=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,a=o.length>1;for(const n of o){const e=r.nodes[n],t=[i(n,0)];$e(e)&&!a&&t.push(...e.extensions.MSFT_lod.ids.map((e,t)=>i(e,t+1))),await Promise.all(t)}async function i(o,a){const n=r.nodes[o],s=e.getNodeTransform(o);if(Xe.warnUnsupportedIf(null!=n.weights,"Morph targets are not supported."),null!=n.mesh){const e=r.meshes[n.mesh];for(const r of e.primitives)await t(r,s,a,e.name)}for(const e of n.children||[])await i(e,a)}}(i,async(e,t,c,d)=>{const u=void 0!==e.mode?e.mode:4,m=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(u);if(Object(o.j)(m))return void Xe.warnUnsupported("Unsupported primitive mode ("+Ke[u]+"). Skipping primitive.");if(!i.hasPositions(e))return void Xe.warn("Skipping primitive without POSITION vertex attribute.");const p=await i.getMaterial(e,r,a),f={transform:Object(l.c)(t),attributes:{position:await i.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await i.getIndexData(e,r),primitiveType:m,material:We(s,p,n)};i.hasNormals(e)&&(f.attributes.normal=await i.getNormalData(e,r)),i.hasTangents(e)&&(f.attributes.tangent=await i.getTangentData(e,r)),i.hasTextureCoordinates(e)&&(f.attributes.texCoord0=await i.getTextureCoordinates(e,r)),i.hasVertexColors(e)&&(f.attributes.color=await i.getVertexColors(e,r));let h=null;Object(o.k)(s.meta)&&Object(o.k)(s.meta.ESRI_lod)&&"screenSpaceRadius"===s.meta.ESRI_lod.metric&&(h=s.meta.ESRI_lod.thresholds[c]),s.lods[c]=s.lods[c]||{parts:[],name:d,lodThreshold:h},s.lods[c].parts.push(f)}),{model:s,meta:{isEsriSymbolResource:c,uri:i.uri},customMeta:{}}}(new he(t.streamDataRequester),r.url,t,t.usePBR)),d=Object(o.i)(c.model.meta,"ESRI_proxyEllipsoid");c.meta.isEsriSymbolResource&&Object(o.k)(d)&&-1!==c.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(o.j)(s))return;const d=c.attributes.position,m=d.count,p=Object(a.e)(),f=Object(a.e)(),h=Object(a.e)(),v=Ce(u.J,m),b=Ce(u.u,m),g=Object(n.a)(Object(l.b)(),c.transform);for(let o=0;o<m;o++){d.getVec(o,f),s.getVec(o,p),Object(i.l)(f,f,c.transform),Object(i.i)(h,f,t.center),Object(i.a)(h,h,t.radius);const a=h[2],n=Object(i.o)(h),l=Math.min(.45+.55*n*n,1);Object(i.a)(h,h,t.radius),Object(i.l)(h,h,g),Object(i.q)(h,h),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(i.h)(h,h,p,a>-1?.2:Math.min(-4*a-3.8,1)),b.setVec(o,h),v.set(o,0,255*l),v.set(o,1,255*l),v.set(o,2,255*l),v.set(o,3,255)}c.attributes.normal=b,c.attributes.color=v}}}(c,d);const m=c.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:c.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:c.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=pt(c,m,p,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=pt(c,m,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}const f=pt(c,m,p);return{lods:f,referenceBoundingBox:f[0].boundingBox,isEsriSymbolResource:c.meta.isEsriSymbolResource,isWosr:!1,remove:c.remove}}function mt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function pt(e,t,r,a){const i=e.model,n=Object(c.a)(),s=new Array,l=new Map,m=new Map;return i.lods.forEach((e,c)=>{if(void 0!==a&&c!==a)return;const p={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(o.k)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(b.e)()};s.push(p),e.parts.forEach(e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=i.materials.get(e.material),c=Object(o.k)(e.attributes.texCoord0),x=Object(o.k)(e.attributes.normal);if(!l.has(a)){if(c){if(Object(o.k)(s.textureColor)&&!m.has(s.textureColor)){const e=i.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureColor,new le.a(e.data,t))}if(Object(o.k)(s.textureNormal)&&!m.has(s.textureNormal)){const e=i.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureNormal,new le.a(e.data,t))}if(Object(o.k)(s.textureOcclusion)&&!m.has(s.textureOcclusion)){const e=i.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureOcclusion,new le.a(e.data,t))}if(Object(o.k)(s.textureEmissive)&&!m.has(s.textureEmissive)){const e=i.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureEmissive,new le.a(e.data,t))}if(Object(o.k)(s.textureMetallicRoughness)&&!m.has(s.textureMetallicRoughness)){const e=i.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};m.set(s.textureMetallicRoughness,new le.a(e.data,t))}}const n=s.color[0]**(1/Z),d=s.color[1]**(1/Z),u=s.color[2]**(1/Z),p=s.emissiveFactor[0]**(1/Z),f=s.emissiveFactor[1]**(1/Z),h=s.emissiveFactor[2]**(1/Z);l.set(a,new K({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:ft(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[n,d,u],ambient:[n,d,u],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(o.k)(s.textureColor)&&c?m.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:Object(o.k)(s.textureNormal)&&c?m.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(o.k)(s.textureOcclusion)&&c?m.get(s.textureOcclusion).id:void 0,emissiveTextureId:Object(o.k)(s.textureEmissive)&&c?m.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(o.k)(s.textureMetallicRoughness)&&c?m.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[p,f,h],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const y=function(e,t){switch(t){case 4:return function(e){return"number"==typeof e?Object(Ze.d)(e):Object(Qe.i)(e)||Object(Qe.k)(e)?new Uint32Array(e):e}(e);case 5:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let a=0;a<r;a+=1)if(a%2==0){const r=e[a+1],i=e[a+2];o[t++]=e[a],o[t++]=r,o[t++]=i}else{const r=e[a],i=e[a+2];o[t++]=e[a+1],o[t++]=r,o[t++]=i}}return o}(e);case 6:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let a=e[1],i=0;for(let n=0;n<r;++n){const r=e[n+2];o[i++]=t,o[i++]=a,o[i++]=r,a=r}return o}}(e)}}(e.indices||e.attributes.position.count,e.primitiveType),O=e.attributes.position.count,w=Ce(u.u,O);f(w,e.attributes.position,e.transform);const T=[["position",{data:w.typedBuffer,size:w.elementCount,exclusive:!0}]],C=[["position",y]];if(Object(o.k)(e.attributes.normal)){const t=Ce(u.u,O);Object(d.h)(n,e.transform),h(t,e.attributes.normal,n),T.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["normal",y])}if(Object(o.k)(e.attributes.tangent)){const t=Ce(u.C,O);Object(d.h)(n,e.transform),lt(t,e.attributes.tangent,n),T.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["tangent",y])}if(Object(o.k)(e.attributes.texCoord0)){const t=Ce(u.m,O);xe(t,e.attributes.texCoord0),T.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["uv0",y])}if(Object(o.k)(e.attributes.color)){const t=Ce(u.J,O);if(4===e.attributes.color.elementCount)e.attributes.color instanceof u.C?dt(t,e.attributes.color,255):e.attributes.color instanceof u.J?Oe(t,e.attributes.color):e.attributes.color instanceof u.H&&dt(t,e.attributes.color,1/256);else{we(t,255,255,255,255);const r=new u.B(t.buffer,0,4);e.attributes.color instanceof u.u?v(r,e.attributes.color,255):e.attributes.color instanceof u.B?ye(r,e.attributes.color):e.attributes.color instanceof u.z&&v(r,e.attributes.color,1/256)}T.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push(["color",y])}const S=new g.a(T,C);p.stageResources.geometries.push(S),p.stageResources.materials.push(l.get(a)),c&&(Object(o.k)(s.textureColor)&&p.stageResources.textures.push(m.get(s.textureColor)),Object(o.k)(s.textureNormal)&&p.stageResources.textures.push(m.get(s.textureNormal)),Object(o.k)(s.textureOcclusion)&&p.stageResources.textures.push(m.get(s.textureOcclusion)),Object(o.k)(s.textureEmissive)&&p.stageResources.textures.push(m.get(s.textureEmissive)),Object(o.k)(s.textureMetallicRoughness)&&p.stageResources.textures.push(m.get(s.textureMetallicRoughness))),p.numberOfVertices+=O;const M=S.boundingInfo;Object(o.k)(M)&&(Object(b.j)(p.boundingBox,M.getBBMin()),Object(b.j)(p.boundingBox,M.getBBMax()))})}),s}function ft(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}Object.freeze({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void p.error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],m=r[8],f=r[9],h=r[10],v=r[11],b=r[12],g=r[13],x=r[14],y=r[15],O=e.typedBuffer,w=e.typedBufferStride,T=t.typedBuffer,C=t.typedBufferStride;for(let p=0;p<o;p++){const e=p*w,t=p*C,r=T[t],o=T[t+1],S=T[t+2],M=T[t+3];O[e]=a*r+c*o+m*S+b*M,O[e+1]=i*r+l*o+f*S+g*M,O[e+2]=n*r+d*o+h*S+x*M,O[e+3]=s*r+u*o+v*S+y*M}},transformMat3:lt,scale:dt,shiftRight:function(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=n[t]>>r,a[e+1]=n[t+1]>>r,a[e+2]=n[t+2]>>r,a[e+3]=n[t+3]>>r}}})},p9cc:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var o=r("OIYi"),a=r("R/jG"),i=r("fLTx");function n(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(i.a,t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o.a`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.a`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o.a`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o.a`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o.a`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(o.a`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(o.a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o.a`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}Object(a.c)(0,.6,.2),(n||(n={})).bindUniforms=function(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},qXiY:function(e,t,r){"use strict";r.d(t,"a",function(){return g}),r.d(t,"b",function(){return w}),r.d(t,"c",function(){return O}),r.d(t,"d",function(){return x}),r.d(t,"e",function(){return _}),r.d(t,"f",function(){return M});var o=r("srIe"),a=r("Cy1f"),i=r("5DEt"),n=r("15Hh"),s=r("2uVf"),c=r("r+FG"),l=r("sTkM"),d=r("D8Ta"),u=r("HJJS"),m=r("dXfX"),p=r("BPBZ"),f=r("R/jG"),h=r("+JUG"),v=(r("DZ/s"),r("0Kx6")),b=r("WiJz");class g{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}class x{constructor(){this._transform=Object(c.b)(),this._transformInverse=new y({value:this._transform},n.a,c.b),this._transformInverseTranspose=new y(this._transformInverse,n.b,c.b),this._transformTranspose=new y({value:this._transform},n.b,c.b),this._transformInverseRotation=new y({value:this._transform},u.b,s.a)}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Object(n.c)(this._transform,e)}multiplyTransform(e){Object(n.l)(this._transform,this._transform,e)}set(e){Object(n.c)(this._transform,e),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this.invalidateLazyTransforms()}}class y{constructor(e,t,r){this.original=e,this.update=t,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class O{constructor(){this.min=new w,this.max=new w,this.hud=new w,this.ground=new w}init(e){this.min.init(e),this.max.init(e),this.hud.init(e),this.ground.init(e),this.all=[]}}class w{constructor(e){this.normal=Object(a.e)(),this.transformation=Object(c.b)(),this._ray=v.f.create(),this.init(e)}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return Object(i.d)(A,this.ray.direction,this.dist),Object(i.o)(A)}getIntersectionPoint(e){return!!this.hasIntersectionPoint&&(Object(i.d)(A,this.ray.direction,this.dist),Object(i.e)(e,this.ray.origin,A),!0)}getTransformedNormal(e){return Object(i.j)(j,this.normal),j[3]=0,Object(m.m)(j,j,this.transformation),Object(i.j)(e,j),Object(i.q)(e,e),e}init(e){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",e?v.f.copy(e,this._ray):this._ray=v.f.create()}set(e,t,r,o,s,c,l,d,u,m){e instanceof b.a&&(e={type:"stage",obj:e}),this.dist=r,Object(i.j)(this.normal,o),Object(n.c)(this.transformation,s),this.target=e,this.name=t,this.drapedLayerOrder=c,this.center=l?Object(a.d)(l):null,this.geometryId=d,this.triangleNr=u,this.drapedLayerGraphicOrder=m}copyFrom(e){v.f.copy(e._ray,this._ray),this.dist=e.dist,this.target=e.target,this.name=e.name,this.drapedLayerOrder=e.drapedLayerOrder,this.center=e.center?Object(a.d)(e.center):null,this.geometryId=e.geometryId,this.triangleNr=e.triangleNr,this.intersector=e.intersector,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,Object(i.j)(this.normal,e.normal),Object(n.c)(this.transformation,e.transformation)}toOwner(e){if(!this.target)return null;switch(this.target.type){case"stage":return T(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return function(e,t){const r=e.metadata.layerUid;return null!=r?t.map.findLayerByUid(r):null}(this.target,e);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return T(this.target.metadata,e);case"TerrainRenderer":return e.map&&e.map.ground}}return null}toGraphic(e){if(!this.target)return null;switch(this.target.type){case"stage":return C(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return function(e){return e.metadata.createGraphic()}(this.target);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return C(this.target.metadata,e)}}return null}}function T(e,t){return Object(o.j)(e)||null==e.layerUid?null:Object(o.k)(t.graphicsView)&&e.layerUid===t.graphicsView.graphics3d.layer.id?t.graphics:t.map.findLayerByUid(e.layerUid)}function C(e,t){if(Object(o.j)(e))return null;const r=T(e,t);if(Object(o.j)(r))return null;if(r===t.graphics)return Object(o.k)(t.graphicsView)?Object(o.q)(t.graphicsView.getGraphicFromGraphicUid(e.graphicUid)):null;const a=t.allLayerViews.find(e=>e.layer===r);return a?(n=e,!(i=a)||i.suspended?null:"getGraphicFromIntersectorMetadata"in i&&n?i.getGraphicFromIntersectorMetadata(n):"getGraphicFromGraphicUid"in i&&null!=n.graphicUid?i.getGraphicFromGraphicUid(n.graphicUid):null):null;var i,n}const S=new class{constructor(e=0){this.offset=e,this.sphere=Object(h.b)(),this.tmpVertex=Object(a.e)()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*t+o[8]*r+o[12],i=o[1]*e+o[5]*t+o[9]*r+o[13],n=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(a*a+i*i+n*n);a+=a*s,i+=i*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*i+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*i+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*i+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function M(e){return Object(o.k)(e)?(S.offset=e,S):null}new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(a.e)(),this.mbs=Object(d.c)(),this.obb={center:Object(a.e)(),halfSize:Object(f.b)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const o=e,a=t,i=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(o*o+a*a+i*i);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+i*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],i=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(i.t)(this.obb.halfSize,e.halfSize,e.quaternion),Object(i.e)(this.obb.halfSize,this.obb.halfSize,e.center);const o=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*o,this.obb.halfSize[1]+=this.obb.halfSize[1]*o,this.obb.halfSize[2]+=this.obb.halfSize[2]*o,Object(i.i)(this.obb.halfSize,this.obb.halfSize,e.center),Object(p.a)(R,e.quaternion),Object(i.t)(this.obb.halfSize,this.obb.halfSize,R),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=Object(a.e)()}applyToVertex(e,t,r){const o=e+this.localOrigin[0],a=t+this.localOrigin[1],i=r+this.localOrigin[2],n=this.offset/Math.sqrt(o*o+a*a+i*i);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+i*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],o=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],i=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}};const _="terrain",A=(Object(a.e)(),Object(a.e)()),j=Object(d.c)(),R=Object(l.a)()},qrV2:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e,t){const r=e.fragment;r.code.add(o.a`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),r.code.add(1===t.doubleSidedMode?o.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `:2===t.doubleSidedMode?o.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `:o.a`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},sJp1:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(o.a`
    vec3 positionModel() { return position; }
  `)}},sKsC:function(e,t,r){"use strict";r.d(t,"a",function(){return A}),r.d(t,"b",function(){return _});var o=r("OIYi"),a=r("Tbkp"),i=r("aQrP"),n=r("0nJL"),s=r("0Ect"),c=r("viRi"),l=r("69UF"),d=r("F7CJ"),u=r("xtdb"),m=r("0BfS"),p=r("vXUg"),f=r("XV/G"),h=r("1TnO"),v=r("368d"),b=r("p9cc"),g=r("F8o4"),x=r("wzLF"),y=r("sJp1"),O=r("bLIi"),w=r("bVvB"),T=r("fiGu"),C=r("cIib"),S=r("6kvK"),M=r("NiZE");function _(e){const t=new i.a,r=t.vertex.code,_=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y.a),t.varyings.add("vpos","vec3"),t.include(c.a,e),t.include(h.a,e),t.include(d.a,e),0!==e.output&&7!==e.output||(t.include(x.a,e),t.include(a.a,{linearDepth:!1}),e.offsetBackfaces&&t.include(g.a),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(v.a,e),t.include(p.a,e),t.include(O.a,e),t.include(w.a,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(o.a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o.a.float(l.c)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?o.a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n.a,e),t.include(l.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(u.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.a),_.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.a`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o.a`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.a`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n.a,e),t.include(S.a,e),t.include(C.a,e),t.include(l.a,e),e.receiveShadows&&t.include(m.a,e),e.multipassTerrainEnabled&&(t.fragment.include(s.a),t.include(u.b,e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b.a,e),t.include(f.a,e),t.fragment.include(M.a),_.add(o.a`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o.a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o.a`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o.a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o.a`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o.a`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${o.a`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o.a`vec3 normalGround = normalize(vpos + localOrigin);`:o.a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o.a``}
        ${1===e.pbrMode||2===e.pbrMode?o.a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(T.a,e),t}var A=Object.freeze({__proto__:null,build:_})},vXUg:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("OIYi");function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o.a`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(o.a`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(o.a`
      void forwardLinearDepth() {}
    `)}},wzLF:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("OIYi");function a(e){const t=o.a`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o.a`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o.a`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.a`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}}}]);